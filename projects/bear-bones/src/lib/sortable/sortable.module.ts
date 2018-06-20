import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortableDirective } from './sortable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SortableDirective,
  ],
  exports: [
    SortableDirective,
  ]
})
export class BBSortableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBSortableModule,
      providers: []
    };
  }
 }
