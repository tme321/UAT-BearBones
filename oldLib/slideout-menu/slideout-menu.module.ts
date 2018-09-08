import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBSlideoutMenu } from './slideout-menu.component';
import { BBSlidingPanelModule } from '../sliding-panel/sliding-panel.module';

@NgModule({
  imports: [
    CommonModule,
    BBSlidingPanelModule,
  ],
  
  declarations: [
    BBSlideoutMenu
  ],
  
  exports: [
	  BBSlideoutMenu
  ]
})
export class BBSlideoutMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBSlideoutMenuModule,
      providers: []
    };
  }  
}
