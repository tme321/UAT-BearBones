import {
    Component,
    ComponentRef,
    Input,
    Output,
    EventEmitter,
    ComponentFactoryResolver,
    ReflectiveInjector,
    ViewContainerRef,
    ViewChildren,
    QueryList,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    HostBinding,
} from '@angular/core';
import { Observable ,  Subscription } from 'rxjs';
import { DropdownItemComponentData } from '../service/dropdown-input-service.interface';
import { BBDynamicComponentDirective } from '../../dynamic-component/dynamic-component.directive';
import { DropdownInputItemsMouseEvent } from '../events/dropdown-input-item-events.interface';

@Component({
    selector:'ul[bb-dropdown-input-items-list]',
    templateUrl: './dropdown-input-item-list.component.html',
    styleUrls: ['./dropdown-input-item-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BBDropdownInputItemsList {
    @HostBinding('class.bb-dropdown-input-items-list') applyHostClass = true;

    @Input() public dynamicComponentsData: DropdownItemComponentData[] = [];

    public dynamicComponentClasses: any[];

    @ViewChildren('container') 
        public dynamicComponentContainers: QueryList<BBDynamicComponentDirective>;

    @ViewChildren('listItem',{read:ViewContainerRef})
        public listItems: QueryList<ViewContainerRef>;

    public get listElements() {
        return this.listItems.toArray().map(li=>{
            return (li.element.nativeElement as HTMLLIElement);
        });
    }

    @Output() public newContainers = new EventEmitter<BBDynamicComponentDirective[]>();

    @Output() public listItemMouseOver = new EventEmitter<DropdownInputItemsMouseEvent>();

    @Output() public listItemClick = new EventEmitter<DropdownInputItemsMouseEvent>();

    private newContainersSub: Subscription;

    itemAutoSelected: boolean[] = [];
    itemSelected: boolean[] = [];

    constructor(private chDetRef: ChangeDetectorRef) {
    }

    public changeSelection(index:number, selected: boolean) {
        this.itemSelected[index]=selected;
        this.chDetRef.markForCheck();
        this.chDetRef.detectChanges();
    }

    public changeAutoSelection(index: number, selected: boolean) {
        this.itemAutoSelected[index]=selected;
        this.chDetRef.markForCheck();
        this.chDetRef.detectChanges();
    }

    ngAfterViewInit() {
        // emit the original list
        this.newContainers.emit(this.dynamicComponentContainers.toArray());
        
        if (this.newContainersSub) {
            this.newContainersSub.unsubscribe();
        }

        this.newContainersSub =
            this.dynamicComponentContainers
                .changes
                .subscribe(
                    newList => {
                        this.itemAutoSelected = [];
                        this.itemSelected = [];
                        this.newContainers.emit(newList.toArray());
                    },
                    (error: string) => console.log(error),
                    () => {
                        this.newContainersSub.unsubscribe()
                    });
    }

    ngOnDestroy() {
        if (this.newContainersSub) {
            this.newContainersSub.unsubscribe();
        }
    }

    onListItemClick(
        e: MouseEvent, 
        index: number){
        this.listItemClick.emit({
            event: e,
            index: index
        });
    }

    onListItemMouseOver(
        e: MouseEvent, 
        index: number) {
        this.listItemMouseOver.emit({
            event: e,
            index: index
        });
    }
}

