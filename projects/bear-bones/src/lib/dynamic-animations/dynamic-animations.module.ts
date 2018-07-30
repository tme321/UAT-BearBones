import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBDynamicAnimationsService } from './dynamic-animations.service';
import { BBStateCssMapperService } from './state-css-mapper/state-css-mapper.service';
import { BBAnimationStatesService } from './animation-states/animation-states.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BBDynamicAnimationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBDynamicAnimationsModule,
      providers: [
        BBDynamicAnimationsService,
        BBAnimationStatesService, 
        BBStateCssMapperService
      ]
    };
  }  
}
