/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, ElementRef, Renderer, ViewChild, HostBinding, NgZone, } from '@angular/core';
import { BBMenuItem } from '../common/menu-item.directive';
import { BBSlidingPanel } from '../sliding-panel/sliding-panel.component';
export class BBCollapsingMenu {
    /**
     * @param {?} renderer
     * @param {?} hostElementRef
     * @param {?} zone
     */
    constructor(renderer, hostElementRef, zone) {
        this.renderer = renderer;
        this.hostElementRef = hostElementRef;
        this.zone = zone;
        this.applyHostClass = true;
        /**
         * Controls whether the collapsed items should
         * open based on a click event or not.
         */
        this.toggleOnClick = true;
        /**
         * Controls whether the collapsed items should open
         * on mouse over or not.
         */
        this.showOnHover = false;
        /**
         * Controls whether the collapsed items should close
         * When clicked outside the toggle or panel or not.
         */
        this.closeOnClickOutside = true;
        this.hasOverflow = false;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.panel.isShowing;
    }
    /**
     * Per issue 10098 ContentChildren currently also adds the host component
     * to a QueryList that it satisfies making it necessary to filter the
     * host component out of it's own list in case someone wants to nest
     * a collapsing menu inside another BB component that uses BBMenuItems.
     *
     * https://github.com/angular/angular/issues/10098#issuecomment-235157642
     * @return {?}
     */
    get itemElements() {
        return this.items.toArray()
            .filter(el => el.nativeElement !== this.hostElementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    get hostDiv() {
        return /** @type {?} */ (this.hostElementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    get displayedDiv() {
        return /** @type {?} */ (this.displayedItems.nativeElement);
    }
    /**
     * @return {?}
     */
    get collapsedDiv() {
        return /** @type {?} */ (this.collapsedItems.nativeElement);
    }
    /**
     * @return {?}
     */
    get toggleDiv() {
        return /** @type {?} */ (this.toggle.nativeElement);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.calculateOverflow();
    }
    /**
     * Determine which, if any, items need to be
     * moved into the collapsed panel when they
     * overflow the menu width.
     * @return {?}
     */
    calculateOverflow() {
        this.renderer.projectNodes(this.displayedDiv, this.itemElements.map(el => { return el.nativeElement; }));
        if (this.areDisplayedItemsToWide()) {
            this.zone.run(() => {
                setTimeout(() => {
                    this.hasOverflow = true;
                });
            });
            const /** @type {?} */ menuCalcedRight = (this.hostDiv.offsetLeft +
                this.hostDiv.offsetWidth -
                this.toggleDiv.offsetWidth);
            let /** @type {?} */ firstOverflowIndex = Number.POSITIVE_INFINITY;
            let /** @type {?} */ overflowAmount = 0;
            // find the first item that is outside the menu's size - toggle size
            for (let /** @type {?} */ i = 0; i < this.itemElements.length; i++) {
                const /** @type {?} */ ele = (/** @type {?} */ (this.itemElements[i].nativeElement));
                const /** @type {?} */ eleCalcedRight = (ele.offsetLeft + this.hostDiv.offsetLeft + ele.offsetWidth);
                // calculate how much an item overflows the container
                // taking the toggles width into account.
                overflowAmount = eleCalcedRight - menuCalcedRight;
                if (overflowAmount > 0) {
                    firstOverflowIndex = i;
                    break;
                }
            }
            // all items are collapsed
            if (firstOverflowIndex == 0) {
                this.renderer.projectNodes(this.collapsedDiv, this.itemElements.map(el => { return el.nativeElement; }));
            }
            else {
                this.renderer.projectNodes(this.collapsedDiv, this.itemElements
                    .filter((el, index) => {
                    return (index >= firstOverflowIndex);
                })
                    .map(el => { return el.nativeElement; }));
            }
        }
        else {
            this.zone.run(() => {
                setTimeout(() => {
                    this.hasOverflow = false;
                });
            });
        }
    }
    /**
     * Determine if the menu content width is larger than the menu width
     * @return {?}
     */
    areDisplayedItemsToWide() {
        return this.displayedDiv.getBoundingClientRect().width >
            this.hostDiv.getBoundingClientRect().width;
    }
    /**
     * Event handlers
     * @return {?}
     */
    onWindowResize() {
        this.calculateOverflow();
    }
}
BBCollapsingMenu.decorators = [
    { type: Component, args: [{
                selector: 'div[bb-collapsing-menu]',
                template: `<div class="menu-container">
  <div #displayedItems class="displayed">
  </div>

  <div  #toggle
        [class.hidden]="!hasOverflow" 
        [bb-sliding-panel-toggle]="panel"
        [toggleOnClick]="toggleOnClick"
        [closeOnClickOutside]="closeOnClickOutside"
        [showOnHover]="showOnHover">
    
    <ng-content select="[bb-menu-toggle]"></ng-content>
  </div>
  <div bb-sliding-panel 
       #panel="bbSlidingPanel"
       #collapsedItems 
       slideDirection="down"
       #panel="bbSlidingPanel">
  </div>
</div>`,
                styles: [`div.displayed{flex-grow:1;flex-direction:row;flex-shrink:0;display:flex}div.menu-container{position:relative;height:inherit;flex-direction:row;display:flex;align-items:center;flex-shrink:0;flex-grow:1}div.bb-sliding-panel{display:flex;flex-direction:column;flex-grow:1;position:absolute;right:0;top:100%}div.hidden{visibility:hidden}`],
                host: {
                    '(window:resize)': "onWindowResize()",
                },
                exportAs: "bbCollapsingMenu"
            },] },
];
/** @nocollapse */
BBCollapsingMenu.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef },
    { type: NgZone }
];
BBCollapsingMenu.propDecorators = {
    applyHostClass: [{ type: HostBinding, args: ['class.bb-collapsing-menu',] }],
    toggleOnClick: [{ type: Input }],
    showOnHover: [{ type: Input }],
    closeOnClickOutside: [{ type: Input }],
    items: [{ type: ContentChildren, args: [BBMenuItem, { read: ElementRef, descendants: false },] }],
    displayedItems: [{ type: ViewChild, args: ['displayedItems', { read: ElementRef },] }],
    collapsedItems: [{ type: ViewChild, args: ['collapsedItems', { read: ElementRef },] }],
    toggle: [{ type: ViewChild, args: ['toggle', { read: ElementRef },] }],
    panel: [{ type: ViewChild, args: ['panel',] }]
};
function BBCollapsingMenu_tsickle_Closure_declarations() {
    /** @type {?} */
    BBCollapsingMenu.prototype.applyHostClass;
    /**
     * Controls whether the collapsed items should
     * open based on a click event or not.
     * @type {?}
     */
    BBCollapsingMenu.prototype.toggleOnClick;
    /**
     * Controls whether the collapsed items should open
     * on mouse over or not.
     * @type {?}
     */
    BBCollapsingMenu.prototype.showOnHover;
    /**
     * Controls whether the collapsed items should close
     * When clicked outside the toggle or panel or not.
     * @type {?}
     */
    BBCollapsingMenu.prototype.closeOnClickOutside;
    /** @type {?} */
    BBCollapsingMenu.prototype.items;
    /** @type {?} */
    BBCollapsingMenu.prototype.displayedItems;
    /** @type {?} */
    BBCollapsingMenu.prototype.collapsedItems;
    /** @type {?} */
    BBCollapsingMenu.prototype.toggle;
    /** @type {?} */
    BBCollapsingMenu.prototype.panel;
    /** @type {?} */
    BBCollapsingMenu.prototype.hasOverflow;
    /** @type {?} */
    BBCollapsingMenu.prototype.renderer;
    /** @type {?} */
    BBCollapsingMenu.prototype.hostElementRef;
    /** @type {?} */
    BBCollapsingMenu.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2luZy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1YXQvYmVhcmJvbmVzLyIsInNvdXJjZXMiOlsibGliL2NvbGxhcHNpbmctbWVudS9jb2xsYXBzaW5nLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFJVixRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDeEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQThCMUUsTUFBTTs7Ozs7O0lBbUVKLFlBQ1UsVUFDQSxnQkFDQTtRQUZBLGFBQVEsR0FBUixRQUFRO1FBQ1IsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsU0FBSSxHQUFKLElBQUk7OEJBckU0QyxJQUFJOzs7Ozs2QkFNckMsSUFBSTs7Ozs7MkJBTU4sS0FBSzs7Ozs7bUNBTUcsSUFBSTsyQkE4Q3JCLEtBQUs7S0FLUTs7OztRQXRDaEIsTUFBTTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7UUFXbEIsWUFBWTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7YUFDeEIsTUFBTSxDQUFDLEVBQUUsQ0FBQSxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7OztRQUc3RCxPQUFPO1FBQ2pCLE1BQU0sbUJBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUErQixFQUFDOzs7OztRQUdqRCxZQUFZO1FBQ3RCLE1BQU0sbUJBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUErQixF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RUFBRTtvQkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtpQkFBQyxDQUFDLENBQUE7YUFBQyxDQUFDLENBQUM7U0FDbEM7Ozs7OztJQU1HLHVCQUF1QjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0lBTy9DLGNBQWM7UUFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7O1lBbExGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkw7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsK1VBQStVLENBQUM7Z0JBQ3pWLElBQUksRUFBQztvQkFDSCxpQkFBaUIsRUFBRSxrQkFBa0I7aUJBQ3RDO2dCQUNELFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFuQ0MsUUFBUTtZQUpSLFVBQVU7WUFPVixNQUFNOzs7NkJBa0NMLFdBQVcsU0FBQywwQkFBMEI7NEJBTXRDLEtBQUs7MEJBTUwsS0FBSztrQ0FNTCxLQUFLO29CQUVMLGVBQWUsU0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUM7NkJBRWpFLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUM7NkJBRTdDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUM7cUJBRTdDLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDO29CQUdyQyxTQUFTLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgUXVlcnlMaXN0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdSZWYsXHJcbiAgUmVuZGVyZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE5nWm9uZSxcclxuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJCTWVudUl0ZW0gfSBmcm9tICcuLi9jb21tb24vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdltiYi1jb2xsYXBzaW5nLW1lbnVdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgI2Rpc3BsYXllZEl0ZW1zIGNsYXNzPVwiZGlzcGxheWVkXCI+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgICN0b2dnbGVcclxuICAgICAgICBbY2xhc3MuaGlkZGVuXT1cIiFoYXNPdmVyZmxvd1wiIFxyXG4gICAgICAgIFtiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV09XCJwYW5lbFwiXHJcbiAgICAgICAgW3RvZ2dsZU9uQ2xpY2tdPVwidG9nZ2xlT25DbGlja1wiXHJcbiAgICAgICAgW2Nsb3NlT25DbGlja091dHNpZGVdPVwiY2xvc2VPbkNsaWNrT3V0c2lkZVwiXHJcbiAgICAgICAgW3Nob3dPbkhvdmVyXT1cInNob3dPbkhvdmVyXCI+XHJcbiAgICBcclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LXRvZ2dsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBiYi1zbGlkaW5nLXBhbmVsIFxyXG4gICAgICAgI3BhbmVsPVwiYmJTbGlkaW5nUGFuZWxcIlxyXG4gICAgICAgI2NvbGxhcHNlZEl0ZW1zIFxyXG4gICAgICAgc2xpZGVEaXJlY3Rpb249XCJkb3duXCJcclxuICAgICAgICNwYW5lbD1cImJiU2xpZGluZ1BhbmVsXCI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5kaXNwbGF5ZWR7ZmxleC1ncm93OjE7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtc2hyaW5rOjA7ZGlzcGxheTpmbGV4fWRpdi5tZW51LWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6aW5oZXJpdDtmbGV4LWRpcmVjdGlvbjpyb3c7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXNocmluazowO2ZsZXgtZ3JvdzoxfWRpdi5iYi1zbGlkaW5nLXBhbmVse2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1ncm93OjE7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MTAwJX1kaXYuaGlkZGVue3Zpc2liaWxpdHk6aGlkZGVufWBdLFxyXG4gIGhvc3Q6e1xyXG4gICAgJyh3aW5kb3c6cmVzaXplKSc6IFwib25XaW5kb3dSZXNpemUoKVwiLFxyXG4gIH0sXHJcbiAgZXhwb3J0QXM6IFwiYmJDb2xsYXBzaW5nTWVudVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkNvbGxhcHNpbmdNZW51IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJiLWNvbGxhcHNpbmctbWVudScpIGFwcGx5SG9zdENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udHJvbHMgd2hldGhlciB0aGUgY29sbGFwc2VkIGl0ZW1zIHNob3VsZCAgXHJcbiAgICogb3BlbiBiYXNlZCBvbiBhIGNsaWNrIGV2ZW50IG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSB0b2dnbGVPbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udHJvbHMgd2hldGhlciB0aGUgY29sbGFwc2VkIGl0ZW1zIHNob3VsZCBvcGVuIFxyXG4gICAqIG9uIG1vdXNlIG92ZXIgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPbkhvdmVyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIGNvbGxhcHNlZCBpdGVtcyBzaG91bGQgY2xvc2VcclxuICAgKiBXaGVuIGNsaWNrZWQgb3V0c2lkZSB0aGUgdG9nZ2xlIG9yIHBhbmVsIG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBjbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihCQk1lbnVJdGVtLCB7cmVhZDpFbGVtZW50UmVmLCBkZXNjZW5kYW50czogZmFsc2V9KSBcclxuICAgIGl0ZW1zOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcbiAgQFZpZXdDaGlsZCgnZGlzcGxheWVkSXRlbXMnLCB7cmVhZDpFbGVtZW50UmVmfSkgXHJcbiAgICBkaXNwbGF5ZWRJdGVtczogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjb2xsYXBzZWRJdGVtcycsIHtyZWFkOkVsZW1lbnRSZWZ9KSBcclxuICAgIGNvbGxhcHNlZEl0ZW1zOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZScsIHtyZWFkOkVsZW1lbnRSZWZ9KSBcclxuICAgIHRvZ2dsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogQkJTbGlkaW5nUGFuZWw7XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaXNTaG93aW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyIGlzc3VlIDEwMDk4IENvbnRlbnRDaGlsZHJlbiBjdXJyZW50bHkgYWxzbyBhZGRzIHRoZSBob3N0IGNvbXBvbmVudFxyXG4gICAqIHRvIGEgUXVlcnlMaXN0IHRoYXQgaXQgc2F0aXNmaWVzIG1ha2luZyBpdCBuZWNlc3NhcnkgdG8gZmlsdGVyIHRoZSBcclxuICAgKiBob3N0IGNvbXBvbmVudCBvdXQgb2YgaXQncyBvd24gbGlzdCBpbiBjYXNlIHNvbWVvbmUgd2FudHMgdG8gbmVzdFxyXG4gICAqIGEgY29sbGFwc2luZyBtZW51IGluc2lkZSBhbm90aGVyIEJCIGNvbXBvbmVudCB0aGF0IHVzZXMgQkJNZW51SXRlbXMuXHJcbiAgICogXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAwOTgjaXNzdWVjb21tZW50LTIzNTE1NzY0MlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0IGl0ZW1FbGVtZW50cygpOiBFbGVtZW50UmVmW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXMudG9BcnJheSgpXHJcbiAgICAgIC5maWx0ZXIoZWw9PiBlbC5uYXRpdmVFbGVtZW50ICE9PSB0aGlzLmhvc3RFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaG9zdERpdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgZGlzcGxheWVkRGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZEl0ZW1zLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBjb2xsYXBzZWREaXYoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkSXRlbXMubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHRvZ2dsZURpdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy50b2dnbGUubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICB9XHJcblxyXG4gIGhhc092ZXJmbG93ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIFxyXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jYWxjdWxhdGVPdmVyZmxvdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoaWNoLCBpZiBhbnksIGl0ZW1zIG5lZWQgdG8gYmUgXHJcbiAgICogbW92ZWQgaW50byB0aGUgY29sbGFwc2VkIHBhbmVsIHdoZW4gdGhleSBcclxuICAgKiBvdmVyZmxvdyB0aGUgbWVudSB3aWR0aC5cclxuICAgKi9cclxuICBwcml2YXRlIGNhbGN1bGF0ZU92ZXJmbG93KCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnByb2plY3ROb2Rlcyh0aGlzLmRpc3BsYXllZERpdiwgXHJcbiAgICAgICAgdGhpcy5pdGVtRWxlbWVudHMubWFwKGVsPT57IHJldHVybiBlbC5uYXRpdmVFbGVtZW50IH0pKTtcclxuXHJcbiAgICAgIGlmKHRoaXMuYXJlRGlzcGxheWVkSXRlbXNUb1dpZGUoKSkge1xyXG5cclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaGFzT3ZlcmZsb3cgPSB0cnVlfSl9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUNhbGNlZFJpZ2h0ID0gXHJcbiAgICAgICAgICAodGhpcy5ob3N0RGl2Lm9mZnNldExlZnQgKyBcclxuICAgICAgICAgIHRoaXMuaG9zdERpdi5vZmZzZXRXaWR0aCAtIFxyXG4gICAgICAgICAgdGhpcy50b2dnbGVEaXYub2Zmc2V0V2lkdGgpO1xyXG5cclxuICAgICAgICBsZXQgZmlyc3RPdmVyZmxvd0luZGV4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xyXG4gICAgICAgIGxldCBvdmVyZmxvd0Ftb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBpdGVtIHRoYXQgaXMgb3V0c2lkZSB0aGUgbWVudSdzIHNpemUgLSB0b2dnbGUgc2l6ZVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1FbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZWxlID0gKHRoaXMuaXRlbUVsZW1lbnRzW2ldLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgY29uc3QgZWxlQ2FsY2VkUmlnaHQgPSAoZWxlLm9mZnNldExlZnQgKyB0aGlzLmhvc3REaXYub2Zmc2V0TGVmdCArIGVsZS5vZmZzZXRXaWR0aCk7XHJcblxyXG4gICAgICAgICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIGFuIGl0ZW0gb3ZlcmZsb3dzIHRoZSBjb250YWluZXJcclxuICAgICAgICAgIC8vIHRha2luZyB0aGUgdG9nZ2xlcyB3aWR0aCBpbnRvIGFjY291bnQuXHJcbiAgICAgICAgICBvdmVyZmxvd0Ftb3VudCA9IGVsZUNhbGNlZFJpZ2h0IC0gbWVudUNhbGNlZFJpZ2h0O1xyXG5cclxuICAgICAgICAgIGlmKG92ZXJmbG93QW1vdW50ID4gMCkge1xyXG4gICAgICAgICAgICBmaXJzdE92ZXJmbG93SW5kZXggPSBpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFsbCBpdGVtcyBhcmUgY29sbGFwc2VkXHJcbiAgICAgICAgaWYgKGZpcnN0T3ZlcmZsb3dJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucHJvamVjdE5vZGVzKHRoaXMuY29sbGFwc2VkRGl2LFxyXG4gICAgICAgICAgICAgIHRoaXMuaXRlbUVsZW1lbnRzLm1hcChlbD0+e3JldHVybiBlbC5uYXRpdmVFbGVtZW50fSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhlIG92ZXJmbG93IGl0ZW1zIG1ha2UgZW5vdWdoIHJvb20gZm9yIHRoZSB0b2dnbGVcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5wcm9qZWN0Tm9kZXModGhpcy5jb2xsYXBzZWREaXYsXHJcbiAgICAgICAgICAgICAgdGhpcy5pdGVtRWxlbWVudHNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKGluZGV4ID49IGZpcnN0T3ZlcmZsb3dJbmRleCl9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChlbD0+e3JldHVybiBlbC5uYXRpdmVFbGVtZW50fSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaGFzT3ZlcmZsb3cgPSBmYWxzZX0pfSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiB0aGUgbWVudSBjb250ZW50IHdpZHRoIGlzIGxhcmdlciB0aGFuIHRoZSBtZW51IHdpZHRoXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhcmVEaXNwbGF5ZWRJdGVtc1RvV2lkZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IFxyXG4gICAgICB0aGlzLmhvc3REaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBoYW5kbGVyc1xyXG4gICAqL1xyXG5cclxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIHRoaXMuY2FsY3VsYXRlT3ZlcmZsb3coKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==