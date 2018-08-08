import {
    Directive,  
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    ReflectiveInjector,
    ViewContainerRef, 
    EventEmitter,
    Provider,
    OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { BBComponentConstructor } from './component-constructor/component-constructor.model';
import { BBDynamicComponentModel } from './dynamic-component-model/dynamic-component-model.model';
import { BBDynamicComponentSerializer } from './dynamic-component-serializer/dynamic-component-serializer.model';
import { InitialValues } from './initial-values/initial-values.model';
import { InputStreams } from './input-streams/input-streams.model';
import { OutputCallbacks } from './output-callbacks/output-callbacks.model';

@Directive({
  selector: '[bb-dynamic-component-2]',
  exportAs:'dynamicComp2',
})
export class BBDynamicComponentDirective2<T> implements OnDestroy {
    protected compRef: ComponentRef<BBComponentConstructor>;
    private inputSubscriptions: Subscription[] = [];
    private outputSubscriptions: Subscription[] = [];

    @Input() serializer: BBDynamicComponentSerializer;

    @Input('bb-dynamic-component-2') 
    set componentModel(compModel: BBDynamicComponentModel<T>) {
      this.initializeComponent(compModel);
    }

    constructor(protected vcRef: ViewContainerRef,
                protected resolver: ComponentFactoryResolver) {
    }

    protected initializeComponent(compModel: BBDynamicComponentModel<T>) {
        const componentConstructor = this.serializer.getComponent(compModel.name);

        if (!componentConstructor) {
            console.error(`${compModel.name} was not found for deserialization.`)
          return;
        }

        this.destroyComp();

        this.compRef = this.createComponent(
            componentConstructor, 
            this.createInjector(compModel.providers));

        this.setInitialValues(compModel.initialValues);
        this.attachInputStreams(compModel.inputs$);
        this.attachOutputCallbacks(compModel.outputCallbacks);

        this.vcRef.insert(this.compRef.hostView);
        this.compRef.changeDetectorRef.markForCheck();
    }

    /**
     * Create an injector from the {@link BBDynamicComponentDirective2}s
     * {@link ViewContainerRef}.
     * @param providers An array of providers for the injector.
     */
    protected createInjector(providers: Provider[]) {
        providers = providers || [];
        return ReflectiveInjector
            .fromResolvedProviders(
            ReflectiveInjector.resolve(providers),
            this.vcRef.parentInjector);
    }

    /**
     * Request a component from angular of the given type.  
     * @param constructor The component constructor 
     * @param injector The injector to use when creating the component.
     */
    protected createComponent(
        constructor: BBComponentConstructor, 
        injector: ReflectiveInjector) {
        return this.resolver
            .resolveComponentFactory<typeof constructor>(constructor)
            .create(injector);
    }

    /**
     * Set initial values into the component.
     * @param initValues The map of property names to values to set.
     */
    protected setInitialValues(initValues: InitialValues<T>) {
        if (initValues) {
            Object.keys(initValues).map(
                input => {
                    this.compRef.instance[input] = initValues[input];
                }
            )
        }
    }

    /**
     * Attach {@link Observable} input streams to the 
     * specified property of the component.
     * 
     * The streams will attach a {@link distinctUntilChanged} operator
     * to the {@link Observable} and mark the component for change detection
     * when new values are passed through the stream. 
     * @param streams The map of property names to {@link Observable}s to attach.
     */
    protected attachInputStreams(streams: InputStreams<T>) {
        if(streams) {
            this.inputSubscriptions = 
                Object.keys(streams).map(input=>{
                    return streams[input]
                        .pipe(
                            distinctUntilChanged()
                        )
                        .subscribe(value=>{
                            this.compRef.instance[input] = value;
                            this.compRef.changeDetectorRef.markForCheck();
                        })
                });
        }
    }


    /**
     * Attach the {@link EventEmitter}s inside the component to
     * the specified callback.
     * @param callbacks The map of {@link EventEmitter} property names to
     * callbacks that will be executed when the {@link EventEmitter} fires.
     */
    protected attachOutputCallbacks(callbacks: OutputCallbacks<T>) {
        if(callbacks) {
            this.outputSubscriptions = 
                Object.keys(callbacks)
                    .map(cb=>{
                        return (this.compRef.instance[cb] as EventEmitter<any>)
                            .subscribe(event=>{
                                callbacks[cb](event);
                            });
                    });
        }
    }

    /**
     * Clean up all subscriptions and destroy the dynamically
     * instantiated component.
     */
    protected destroyComp() {
        this.closeAllSubscriptions(this.outputSubscriptions);
        this.closeAllSubscriptions(this.inputSubscriptions);

        if (this.compRef) {
            this.compRef.destroy();
        }
    }

    /**
     * Close all the subscriptions that are still open.
     * @param subscriptions The array of subscriptions to 
     * potentially close.
     */
    protected closeAllSubscriptions(subscriptions: Subscription[]) {
        if(subscriptions){
            subscriptions.forEach(sub=>{
                if(!sub.closed) {
                    sub.unsubscribe();
                }
            });
        }
    }

    ngOnDestroy() {
        this.destroyComp();
    } 
}
