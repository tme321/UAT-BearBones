import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBDragAndDropContainerComponent } from './drag-and-drop-container/drag-and-drop-container.component';
import { BBDraggableDirective } from './draggable/draggable.directive';
import { BBDragAndDropService } from './drag-and-drop.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BBDragAndDropContainerComponent,
    BBDraggableDirective
  ],
  exports: [
    BBDragAndDropContainerComponent,
    BBDraggableDirective
  ],
  providers: [BBDragAndDropService]
})
export class BBDragAndDropComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBDragAndDropComponentModule,
      providers: []
    };
  }
 }
