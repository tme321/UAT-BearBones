import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBDropdownInput } from './dropdown-input.component';
import { BBSlidingPanelModule } from '../sliding-panel/sliding-panel.module';
import { BBDropdownInputDirective } from './dropdown-input.directive';
import { BBDynamicComponentModule } from '../dynamic-component/dynamic-component.module';
import { BBDropdownInputItemsList } from './item-list/dropdown-input-item-list.component';

@NgModule({
  imports: [
    CommonModule,
    BBSlidingPanelModule,
    BBDynamicComponentModule,
  ],
  
  declarations: [
    BBDropdownInput,
    BBDropdownInputDirective, 
    BBDropdownInputItemsList,
  ],
  
  exports: [
	  BBDropdownInput,
  ]
})
export class BBDropdownInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBDropdownInputModule,
      providers: []
    };
  }
}
