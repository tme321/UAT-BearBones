import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBAlternatingPanelComponent } from './alternating-panel.component';
import { BBAlternatingPanelDirective } from './alternating-panel.directive';
import { BBAnimationStatesModule } from '../animation-states/animation-states.module';

@NgModule({
  imports: [
    CommonModule,
    BBAnimationStatesModule.forRoot(),
  ],
  
  declarations: [
    BBAlternatingPanelComponent,
    BBAlternatingPanelDirective, 
  ],

  exports: [
    BBAlternatingPanelComponent,
    BBAlternatingPanelDirective
  ]
})
export class BBAlternatingPanelModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBAlternatingPanelModule,
      providers: []
    };
  }  
}
