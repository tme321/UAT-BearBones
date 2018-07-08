import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBAnimationStatesService } from './animation-states.service';
import { BBStateCssMapperService } from './state-css-mapper/state-css-mapper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: []
})
export class BBAnimationStatesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBAnimationStatesModule,
      providers: [BBAnimationStatesService, BBStateCssMapperService]
    };
  }  
}
