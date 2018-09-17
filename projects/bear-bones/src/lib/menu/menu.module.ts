import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBMenu } from './menu.component';
import { DynamicAnimationsModule } from '@uat/dvk';
import { CssMapperModule } from '../css-mapper/index';
import { BBToggleModule } from '../toggle/index';
import { BBCommonModule } from '../common/index';

@NgModule({
  imports: [
    CommonModule,
    DynamicAnimationsModule,
    CssMapperModule,
    BBToggleModule,
    BBCommonModule
  ],
  
  declarations: [
    BBMenu,
  ],
  
  exports: [
	  BBMenu,
  ]
})
export class BBMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBMenuModule,
      providers: []
    };
  }
 }
