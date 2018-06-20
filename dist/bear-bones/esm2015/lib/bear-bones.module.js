/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BBSlidingPanelModule } from './sliding-panel/index';
import { BBDropdownMenuModule } from './dropdown-menu/index';
import { BBSlideoutMenuModule } from './slideout-menu/index';
import { BBDropdownInputModule } from './dropdown-input/index';
import { BBHamburgerMenuModule } from './hamburger-menu/index';
import { BBCollapsingMenuModule } from './collapsing-menu/index';
import { BBMultiSelectModule } from './multi-select/index';
import { BBCommonModule } from './common/index';
import { BBDragAndDropComponentModule } from './drag-and-drop-component/index';
import { BBTabModule } from './tab/index';
import { BBDragAndDropModule } from './drag-and-drop/index';
import { BBSortableModule } from './sortable/index';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhci1ib25lcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdWF0L2JlYXJib25lcy8iLCJzb3VyY2VzIjpbImxpYi9iZWFyLWJvbmVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsdUJBQU0sVUFBVSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkIsQ0FBQzs7Ozs7Ozs7QUEyQkYsTUFBTTs7O1lBbEJMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CLENBQUMsT0FBTyxFQUFFO29CQUM5QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDOUIscUJBQXFCLENBQUMsT0FBTyxFQUFFO29CQUMvQixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLHNCQUFzQixDQUFDLE9BQU8sRUFBRTtvQkFDaEMsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4Qiw0QkFBNEIsQ0FBQyxPQUFPLEVBQUU7b0JBQ3RDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2lCQUUzQjtnQkFDRCxPQUFPLEVBQUUsVUFBVTthQUNwQjs7QUFPRCxNQUFNOzs7O0lBQ0osTUFBTSxDQUFDLE9BQU87UUFDWixNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsQ0FBQztLQUNoRDs7O1lBUEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4vc2xpZGluZy1wYW5lbC9pbmRleCc7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25NZW51TW9kdWxlIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51L2luZGV4JztcclxuaW1wb3J0IHsgQkJTbGlkZW91dE1lbnVNb2R1bGUgfSBmcm9tICcuL3NsaWRlb3V0LW1lbnUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duSW5wdXRNb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duLWlucHV0L2luZGV4JztcclxuaW1wb3J0IHsgQkJIYW1idXJnZXJNZW51TW9kdWxlIH0gZnJvbSAnLi9oYW1idXJnZXItbWVudS9pbmRleCc7XHJcbmltcG9ydCB7IEJCQ29sbGFwc2luZ01lbnVNb2R1bGUgfSBmcm9tICcuL2NvbGxhcHNpbmctbWVudS9pbmRleCc7XHJcbmltcG9ydCB7IEJCTXVsdGlTZWxlY3RNb2R1bGUgfSBmcm9tICcuL211bHRpLXNlbGVjdC9pbmRleCc7XHJcbmltcG9ydCB7IEJCQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi9jb21tb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wLWNvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IEJCVGFiTW9kdWxlIH0gZnJvbSAnLi90YWIvaW5kZXgnO1xyXG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wL2luZGV4JztcclxuaW1wb3J0IHsgQkJTb3J0YWJsZU1vZHVsZSB9IGZyb20gJy4vc29ydGFibGUvaW5kZXgnO1xyXG5cclxuY29uc3QgQkJfTU9EVUxFUyA9IFtcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlLFxyXG4gICAgQkJEcm9wZG93bk1lbnVNb2R1bGUsXHJcbiAgICBCQlNsaWRlb3V0TWVudU1vZHVsZSxcclxuICAgIEJCRHJvcGRvd25JbnB1dE1vZHVsZSxcclxuICAgIEJCSGFtYnVyZ2VyTWVudU1vZHVsZSxcclxuICAgIEJCQ29sbGFwc2luZ01lbnVNb2R1bGUsXHJcbiAgICBCQk11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgQkJDb21tb25Nb2R1bGUsXHJcbiAgICBCQkRyYWdBbmREcm9wQ29tcG9uZW50TW9kdWxlLFxyXG4gICAgQkJUYWJNb2R1bGUsXHJcbiAgICBCQkRyYWdBbmREcm9wTW9kdWxlLFxyXG4gICAgQkJTb3J0YWJsZU1vZHVsZSxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBvbmx5IGV4aXN0cyB0byBhbGxvdyB0aGUgZGVtbyBcclxuICogdG8gaW1wb3J0IHRoZSBlbnRpcmUgbGlicmFyeSBxdWlja2x5LiAgSXQgXHJcbiAqIHNob3VsZCBub3QgYmUgdXNlZCBieSBjb25zdW1lcnMgb2YgdGhlIFxyXG4gKiBsaWJyYXJ5IGFuZCBpcyBub3QgZXhwb3J0ZWQgYXMgcGFydCBvZiBcclxuICogdGhlIGRpc3RyYnV0ZWQgcGFja2FnZS5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJEcm9wZG93bk1lbnVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJTbGlkZW91dE1lbnVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJEcm9wZG93bklucHV0TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCSGFtYnVyZ2VyTWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkNvbGxhcHNpbmdNZW51TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCTXVsdGlTZWxlY3RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJDb21tb25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQlRhYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyYWdBbmREcm9wTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCU29ydGFibGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgXHJcbiAgXSxcclxuICBleHBvcnRzOiBCQl9NT0RVTEVTXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQlJvb3RNb2R1bGUgeyB9XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IEJCX01PRFVMRVMsXHJcbiAgZXhwb3J0czogQkJfTU9EVUxFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJlYXJCb25lc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge25nTW9kdWxlOiBCQlJvb3RNb2R1bGUsIHByb3ZpZGVyczogW119O1xyXG4gIH1cclxufVxyXG4iXX0=