import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBDropdownMenu } from './dropdown-menu.component';
import { BBSlidingPanelModule } from '../sliding-panel/sliding-panel.module';

@NgModule({
  imports: [
    CommonModule,
    BBSlidingPanelModule
  ],
  
  declarations: [
    BBDropdownMenu
  ],
  
  exports: [
	  BBDropdownMenu
  ]
})
export class BBDropdownMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBDropdownMenuModule,
      providers: []
    };
  }
 }
