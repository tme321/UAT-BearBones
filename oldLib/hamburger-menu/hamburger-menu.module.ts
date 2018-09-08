import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBSlidingPanelModule } from '../sliding-panel/sliding-panel.module';
import { BBHamburgerMenu } from './hamburger-menu.component';
import { BBMenuItemRight } from './menu-item-right.directive';
import {BBCommonModule} from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    BBSlidingPanelModule,
    BBCommonModule,
  ],
  
  declarations: [
    BBHamburgerMenu,
    BBMenuItemRight,
  ],
  
  exports: [
    BBHamburgerMenu,
    BBMenuItemRight,
  ]
})
export class BBHamburgerMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBHamburgerMenuModule,
      providers: []
    };
  }
}
