import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBMultiSelectComponent } from './multi-select.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  
  declarations: [
    BBMultiSelectComponent
  ],
  
  exports: [
    BBMultiSelectComponent
  ]
})
export class BBMultiSelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBMultiSelectModule,
      providers: []
    };
  }  
}
