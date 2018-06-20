import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropService } from './drag-and-drop.service';
import { DropperDirective } from './dropper.directive';
import { DropZoneDirective } from './drop-zone.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropperDirective,
    DropZoneDirective,
  ],
  exports: [
    DropperDirective,
    DropZoneDirective,
  ]
})
export class BBDragAndDropModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBDragAndDropModule,
      providers: [DragAndDropService]
    };
  }
}
