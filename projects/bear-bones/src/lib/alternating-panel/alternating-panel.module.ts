import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBAlternatingPanelComponent } from './alternating-panel.component';
import { BBAlternatingPanelDirective } from './alternating-panel.directive';
import { BBDynamicAnimationsModule } from '../dynamic-animations/dynamic-animations.module';

import { BBAnimationStatesService } from '../dynamic-animations/animation-states/animation-states.service';
import { BBStateCssMapperService } from '../dynamic-animations//state-css-mapper/state-css-mapper.service';


@NgModule({
  imports: [
    //CommonModule,
    //BBDynamicAnimationsModule.forRoot(),
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
      providers: [
        //BBAnimationStatesService,
        //BBStateCssMapperService
      ]
    };
  }  
}
