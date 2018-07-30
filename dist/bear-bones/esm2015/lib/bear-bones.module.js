/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BBSlidingPanelModule } from './sliding-panel';
import { BBDropdownMenuModule } from './dropdown-menu';
import { BBSlideoutMenuModule } from './slideout-menu';
import { BBDropdownInputModule } from './dropdown-input';
import { BBHamburgerMenuModule } from './hamburger-menu';
import { BBCollapsingMenuModule } from './collapsing-menu';
import { BBMultiSelectModule } from './multi-select';
import { BBCommonModule } from './common';
import { BBDragAndDropComponentModule } from './drag-and-drop-component';
import { BBTabModule } from './tab';
import { BBDragAndDropModule } from './drag-and-drop';
import { BBSortableModule } from './sortable';
const /** @type {?} */ BB_MODULES = [
    BBSlidingPanelModule,
    BBDropdownMenuModule,
    BBSlideoutMenuModule,
    BBDropdownInputModule,
    BBHamburgerMenuModule,
    BBCollapsingMenuModule,
    BBMultiSelectModule,
    BBCommonModule,
    BBDragAndDropComponentModule,
    BBTabModule,
    BBDragAndDropModule,
    BBSortableModule,
];
/**
 * This module only exists to allow the demo
 * to import the entire library quickly.  It
 * should not be used by consumers of the
 * library and is not exported as part of
 * the distrbuted package.
 */
export class BBRootModule {
}
BBRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BBSlidingPanelModule.forRoot(),
                    BBDropdownMenuModule.forRoot(),
                    BBSlideoutMenuModule.forRoot(),
                    BBDropdownInputModule.forRoot(),
                    BBHamburgerMenuModule.forRoot(),
                    BBCollapsingMenuModule.forRoot(),
                    BBMultiSelectModule.forRoot(),
                    BBCommonModule.forRoot(),
                    BBDragAndDropComponentModule.forRoot(),
                    BBTabModule.forRoot(),
                    BBDragAndDropModule.forRoot(),
                    BBSortableModule.forRoot(),
                ],
                exports: BB_MODULES
            },] },
];
export class BearBonesModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: BBRootModule, providers: [] };
    }
}
BearBonesModule.decorators = [
    { type: NgModule, args: [{
                imports: BB_MODULES,
                exports: BB_MODULES,
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhci1ib25lcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdWF0L2JlYXJib25lcy8iLCJzb3VyY2VzIjpbImxpYi9iZWFyLWJvbmVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU5Qyx1QkFBTSxVQUFVLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQixDQUFDOzs7Ozs7OztBQTJCRixNQUFNOzs7WUFsQkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDOUIsb0JBQW9CLENBQUMsT0FBTyxFQUFFO29CQUM5QixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtvQkFDL0Isc0JBQXNCLENBQUMsT0FBTyxFQUFFO29CQUNoQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLDRCQUE0QixDQUFDLE9BQU8sRUFBRTtvQkFDdEMsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBRTNCO2dCQUNELE9BQU8sRUFBRSxVQUFVO2FBQ3BCOztBQU9ELE1BQU07Ozs7SUFDSixNQUFNLENBQUMsT0FBTztRQUNaLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQyxDQUFDO0tBQ2hEOzs7WUFQRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsTW9kdWxlIH0gZnJvbSAnLi9zbGlkaW5nLXBhbmVsJztcclxuaW1wb3J0IHsgQkJEcm9wZG93bk1lbnVNb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUnO1xyXG5pbXBvcnQgeyBCQlNsaWRlb3V0TWVudU1vZHVsZSB9IGZyb20gJy4vc2xpZGVvdXQtbWVudSc7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25JbnB1dE1vZHVsZSB9IGZyb20gJy4vZHJvcGRvd24taW5wdXQnO1xyXG5pbXBvcnQgeyBCQkhhbWJ1cmdlck1lbnVNb2R1bGUgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51JztcclxuaW1wb3J0IHsgQkJDb2xsYXBzaW5nTWVudU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2luZy1tZW51JztcclxuaW1wb3J0IHsgQkJNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJy4vbXVsdGktc2VsZWN0JztcclxuaW1wb3J0IHsgQkJDb21tb25Nb2R1bGUgfSBmcm9tICcuL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCRHJhZ0FuZERyb3BDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2RyYWctYW5kLWRyb3AtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJUYWJNb2R1bGUgfSBmcm9tICcuL3RhYic7XHJcbmltcG9ydCB7IEJCRHJhZ0FuZERyb3BNb2R1bGUgfSBmcm9tICcuL2RyYWctYW5kLWRyb3AnO1xyXG5pbXBvcnQgeyBCQlNvcnRhYmxlTW9kdWxlIH0gZnJvbSAnLi9zb3J0YWJsZSc7XHJcblxyXG5jb25zdCBCQl9NT0RVTEVTID0gW1xyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUsXHJcbiAgICBCQkRyb3Bkb3duTWVudU1vZHVsZSxcclxuICAgIEJCU2xpZGVvdXRNZW51TW9kdWxlLFxyXG4gICAgQkJEcm9wZG93bklucHV0TW9kdWxlLFxyXG4gICAgQkJIYW1idXJnZXJNZW51TW9kdWxlLFxyXG4gICAgQkJDb2xsYXBzaW5nTWVudU1vZHVsZSxcclxuICAgIEJCTXVsdGlTZWxlY3RNb2R1bGUsXHJcbiAgICBCQkNvbW1vbk1vZHVsZSxcclxuICAgIEJCRHJhZ0FuZERyb3BDb21wb25lbnRNb2R1bGUsXHJcbiAgICBCQlRhYk1vZHVsZSxcclxuICAgIEJCRHJhZ0FuZERyb3BNb2R1bGUsXHJcbiAgICBCQlNvcnRhYmxlTW9kdWxlLFxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbW9kdWxlIG9ubHkgZXhpc3RzIHRvIGFsbG93IHRoZSBkZW1vIFxyXG4gKiB0byBpbXBvcnQgdGhlIGVudGlyZSBsaWJyYXJ5IHF1aWNrbHkuICBJdCBcclxuICogc2hvdWxkIG5vdCBiZSB1c2VkIGJ5IGNvbnN1bWVycyBvZiB0aGUgXHJcbiAqIGxpYnJhcnkgYW5kIGlzIG5vdCBleHBvcnRlZCBhcyBwYXJ0IG9mIFxyXG4gKiB0aGUgZGlzdHJidXRlZCBwYWNrYWdlLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyb3Bkb3duTWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQlNsaWRlb3V0TWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyb3Bkb3duSW5wdXRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJIYW1idXJnZXJNZW51TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCQ29sbGFwc2luZ01lbnVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJNdWx0aVNlbGVjdE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkNvbW1vbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyYWdBbmREcm9wQ29tcG9uZW50TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCVGFiTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCRHJhZ0FuZERyb3BNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJTb3J0YWJsZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBcclxuICBdLFxyXG4gIGV4cG9ydHM6IEJCX01PRFVMRVNcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCUm9vdE1vZHVsZSB7IH1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogQkJfTU9EVUxFUyxcclxuICBleHBvcnRzOiBCQl9NT0RVTEVTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmVhckJvbmVzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7bmdNb2R1bGU6IEJCUm9vdE1vZHVsZSwgcHJvdmlkZXJzOiBbXX07XHJcbiAgfVxyXG59XHJcbiJdfQ==