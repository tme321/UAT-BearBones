/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
 * Public API Surface of bear-bones
 */
// individual exports
export { AltPanelState1Animation, AltPanelState2Animation, BBAlternatingPanelComponent, BBAlternatingPanelDirective, BBAlternatingPanelModule } from './lib/alternating-panel/index';
export { BBSlidingPanelModule, BBSlidingPanel, BBSlidingPanelToggle } from './lib/sliding-panel/index';
export { BBDropdownMenuModule, BBDropdownMenu } from './lib/dropdown-menu/index';
export { BBSlideoutMenuModule, BBSlideoutMenu } from './lib/slideout-menu/index';
export { BBDropdownInputModule, BBDropdownInputServiceToken, BBDropdownInput } from './lib/dropdown-input/index';
export { BBHamburgerMenuModule, BBHamburgerMenu } from './lib/hamburger-menu/index';
export { BBCollapsingMenuModule, BBCollapsingMenu } from './lib/collapsing-menu/index';
export { BBMultiSelectComponent, BBMultiSelectModule } from './lib/multi-select/index';
export { BBCommonModule, BBMenuItem, closeSubscription } from './lib/common/index';
export { BBDragAndDropContainerComponent, BBDraggableDirective, DraggableContext, BBDragAndDropComponentModule } from './lib/drag-and-drop-component/index';
export { TabService, BBTabModule } from './lib/tab/index';
export { DragAndDropService, BBDragAndDropModule } from './lib/drag-and-drop/index';
export { BBSortableModule } from './lib/sortable/index';
export { BBStateCssMapperService, BBAnimationStatesService } from './lib/animation-states/index';
// everything (is this necessary?)
export { BBRootModule, BearBonesModule } from './lib/bear-bones.module';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1YXQvYmVhcmJvbmVzLyIsInNvdXJjZXMiOlsicHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLHFKQUFjLCtCQUErQixDQUFDO0FBQzlDLDJFQUFjLDJCQUEyQixDQUFDO0FBQzFDLHFEQUFjLDJCQUEyQixDQUFDO0FBQzFDLHFEQUFjLDJCQUEyQixDQUFDO0FBQzFDLG9GQUFjLDRCQUE0QixDQUFDO0FBQzNDLHVEQUFjLDRCQUE0QixDQUFDO0FBQzNDLHlEQUFjLDZCQUE2QixDQUFDO0FBQzVDLDREQUFjLDBCQUEwQixDQUFDO0FBQ3pDLDhEQUFjLG9CQUFvQixDQUFDO0FBQ25DLHNIQUFjLHFDQUFxQyxDQUFDO0FBQ3BELHdDQUFjLGlCQUFpQixDQUFDO0FBQ2hDLHdEQUFjLDJCQUEyQixDQUFDO0FBQzFDLGlDQUFjLHNCQUFzQixDQUFDO0FBQ3JDLGtFQUFjLDhCQUE4QixDQUFDOztBQUc3Qyw4Q0FBYyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2YgYmVhci1ib25lc1xuICovXG5cbiAvLyBpbmRpdmlkdWFsIGV4cG9ydHNcbmV4cG9ydCAqIGZyb20gJy4vbGliL2FsdGVybmF0aW5nLXBhbmVsL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NsaWRpbmctcGFuZWwvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZHJvcGRvd24tbWVudS9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zbGlkZW91dC1tZW51L2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2Ryb3Bkb3duLWlucHV0L2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2hhbWJ1cmdlci1tZW51L2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbGxhcHNpbmctbWVudS9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tdWx0aS1zZWxlY3QvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tbW9uL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RyYWctYW5kLWRyb3AtY29tcG9uZW50L2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3RhYi9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9kcmFnLWFuZC1kcm9wL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NvcnRhYmxlL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2FuaW1hdGlvbi1zdGF0ZXMvaW5kZXgnO1xuXG4vLyBldmVyeXRoaW5nIChpcyB0aGlzIG5lY2Vzc2FyeT8pXG5leHBvcnQgKiBmcm9tICcuL2xpYi9iZWFyLWJvbmVzLm1vZHVsZSc7XG4iXX0=