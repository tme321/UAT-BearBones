import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBMenuItem } from './menu-item.directive';
import { AbstractMenuComponent } from './abstract-menu/abstract-menu.component';

import { PanelRightDirective } from './positioning-directives/panel/panel-right.directive';
import { PanelLeftDirective } from './positioning-directives/panel/panel-left.directive';
import { PanelTopDirective } from './positioning-directives/panel/panel-top.directive';
import { PanelBottomDirective } from './positioning-directives/panel/panel-bottom.directive';
import { PanelJustifyLeftDirective } from './positioning-directives/panel/panel-justify-left.directive';
import { PanelJustifyRightDirective } from './positioning-directives/panel/panel-justify-right.directive';
import { ToggleAfterPanelDirective } from './positioning-directives/toggle/toggle-after-panel.directive';
import { ToggleBeforePanelDirective } from './positioning-directives/toggle/toggle-before-panel.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BBMenuItem,

    PanelRightDirective,
    PanelLeftDirective,
    PanelTopDirective,
    PanelBottomDirective,
    PanelJustifyLeftDirective,
    PanelJustifyRightDirective,
    ToggleAfterPanelDirective,
    ToggleBeforePanelDirective,
  ],
  exports: [
    BBMenuItem,

    PanelRightDirective,
    PanelLeftDirective,
    PanelTopDirective,
    PanelBottomDirective,
    PanelJustifyLeftDirective,
    PanelJustifyRightDirective,
    ToggleAfterPanelDirective,
    ToggleBeforePanelDirective,
  ]
})
export class BBCommonModule {
  /*
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBCommonModule,
      providers: []
    };
  }
  */
 }
