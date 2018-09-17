import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBSideMenuComponent } from './side-menu.component';
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
  declarations: [BBSideMenuComponent],
  exports: [BBSideMenuComponent]
})
export class BBSideMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBSideMenuModule,
      providers: []
    };
  }
}
