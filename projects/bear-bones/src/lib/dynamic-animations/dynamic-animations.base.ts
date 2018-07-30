import { Input, OnInit, OnDestroy } from '@angular/core';
import { BBDynamicAnimationsService } from './dynamic-animations.service';
import { BBDynamicAnimationsHandler } from './dynamic-animations-handler/dynamic-animations-handler.model';
import { BBStateCSSMap } from './state-css-map/state-css-map.model';
import { BBAnimationTransitions } from './animation-transitions/animation-transitions.model';

/**
 * This base class uses the {@link BBDynamicAnimationsService} to generate
 * a {@link BBDynamicAnimationsHandler} and attach it to the element 
 * passed into the super call.
 * 
 * This base class is only suitable for animating a single element.  In order 
 * to animate more consider using the {@link BBDynamicAnimationsService} 
 * directly and wiring up a separate instance of 
 * {@link BBDynamicAnimationsHandler} to each element.
 * 
 * It defines the series of inputs that can be used to control the animation
 * of the specified element.
 * 
 * @member cssMap An `@Input` for the mapping of states to css classes as a 
 * {@link BBStateCSSMap}.
 * @member state An `@Input` for the state as a string.
 * @member transitions An `@Input` for the map of state transitions to 
 * animations as a {@link BBAnimationTransitions}.
 * 
 * @example
 * `@Component()`
 * export class BBAlternatingPanelComponent extends DynamicAnimationsBase {
 *     constructor(
 *         protected elRef: ElementRef,
 *         protected daServ: BBDynamicAnimationsService,
 *     ) {
 *         super(elRef.nativeElement, daServ);
 *     }
 * }
 */
export abstract class BBDynamicAnimationsBase implements OnInit, OnDestroy {
    protected animationsHandler: BBDynamicAnimationsHandler;

    @Input() set cssMap (map: BBStateCSSMap) {
        this.animationsHandler.setCSSMap(map);
    }
    
    @Input() set state(toState: string) {
        this.animationsHandler.nextState(toState);
    }
    
    @Input() set transitions(transitions: BBAnimationTransitions) {
        this.animationsHandler.setTransitions(transitions);
    }
     
    /**
     * BBDynamicAnimationsBase constructor
     * @param element The element, not ElementRef, to apply the animations to.
     * @param dynamicAnimationsService The {@link BBDynamicAnimationsService} to use for the animations.
     */
    constructor(
        protected element: any,
        protected dynamicAnimationsService: BBDynamicAnimationsService,
    ) {
        this.animationsHandler = this.dynamicAnimationsService
          .createAnimationsHandler(this.element);

        /*
         * Override the behaviour of ngOnInit and 
         * ngOnDestroy so that an inheritor of this 
         * class does not have to call the super 
         * version of each.
         */

        const onInit = this.ngOnInit;
        this.ngOnInit = () => {
            this.baseInit();
            onInit.apply(this);
        };          
  
        const onDestroy = this.ngOnDestroy;
        this.ngOnDestroy = () => {
            this.baseDestroy();
            onDestroy.apply(this);
        };          
    }

    ngOnInit() {  
    }
    
    ngOnDestroy() {
    }

    private baseInit() {
        this.animationsHandler.init();
    }

    private baseDestroy() {
        this.animationsHandler.destroy();
    }
}










