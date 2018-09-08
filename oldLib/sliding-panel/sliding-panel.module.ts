import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BBSlidingPanel } from './sliding-panel.component';
import { BBSlidingPanelToggle } from './toggle/sliding-panel-toggle.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  
  declarations: [
    BBSlidingPanel, 
    BBSlidingPanelToggle, 
  ],

  exports: [
    BBSlidingPanel, 
    BBSlidingPanelToggle,
  ]
})
export class BBSlidingPanelModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBSlidingPanelModule,
      providers: []
    };
  }  
}
