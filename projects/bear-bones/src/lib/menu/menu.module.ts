import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBMenu } from './menu.component';
import { DynamicAnimationsModule } from '@uat/dvk';
import { CssMapperModule } from '../css-mapper';
import { BBToggleModule } from '../toggle';
import { PanelTopDirective } from './panel-positioning/panel-top.directive';
import { PanelBottomDirective } from './panel-positioning/panel-bottom.directive';
import { PanelLeftDirective } from './panel-positioning/panel-left.directive';
import { PanelRightDirective } from './panel-positioning/panel-right.directive';

@NgModule({
  imports: [
    CommonModule,
    DynamicAnimationsModule,
    CssMapperModule,
    BBToggleModule
  ],
  
  declarations: [
    BBMenu,
    PanelTopDirective,
    PanelBottomDirective,
    PanelLeftDirective,
    PanelRightDirective,
  ],
  
  exports: [
	  BBMenu,
    PanelTopDirective,
    PanelBottomDirective,
    PanelLeftDirective,
    PanelRightDirective,
    PanelTopDirective,
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
