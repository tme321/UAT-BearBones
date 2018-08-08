import { NgModule, ModuleWithProviders } from '@angular/core';
import { BBDynamicAnimationsService } from './dynamic-animations.service';
import { BBStateCssMapperService } from './state-css-mapper/state-css-mapper.service';
import { BBAnimationStatesService } from './animation-states/animation-states.service';
import { BBDynamicAnimationsHandlerConstructor } from './dynamic-animations-handler/dynamic-animations-handler.constructor';
import { BBDefaultDynamicAnimationsHandlerService } from './default-dynamic-animations-handler/default-dynamic-animations-handler.service';
import { BBDynamicAnimationsHandlerConstructorToken } from './dynamic-animations-handler/dynamic-animations-handler.token';

@NgModule({
  providers: [
    BBDynamicAnimationsService,
    BBAnimationStatesService, 
    BBStateCssMapperService
  ]
})
export class BBDynamicAnimationsModule {
  static forRoot(
    animationsHandlerConstructor: BBDynamicAnimationsHandlerConstructor = BBDefaultDynamicAnimationsHandlerService
  ): ModuleWithProviders {
    return {
      ngModule: BBDynamicAnimationsModule,
      providers: [
        { 
          provide: BBDynamicAnimationsHandlerConstructorToken, 
          useValue: animationsHandlerConstructor 
        }
      ]
    };
  }  
}
