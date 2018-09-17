import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDemoComponent } from './menu-demo.component';
import { BBMenuModule, CssMapperModule, BBToggleModule, BBCommonModule } from '@uat/bear-bones';
import { StyledMenuComponent } from './styled-menu/styled-menu.component';
import { LBStyledMenuComponent } from './styled-menu/lbstyled-menu.component';
import { MBStyledMenuComponent } from './styled-menu/mbstyled-menu.component';
import { RBStyledMenuComponent } from './styled-menu/rbstyled-menu.component';
import { RTStyledMenuComponent } from './styled-menu/rtstyled-menu.component';
import { LTStyledMenuComponent } from './styled-menu/ltstyled-menu.component';
import { MTStyledMenuComponent } from './styled-menu/mtstyled-menu.component';

@NgModule({
  imports: [
    CommonModule,
    BBCommonModule,
    BBMenuModule,
    CssMapperModule,
    BBToggleModule,
  ],
  declarations: [MenuDemoComponent, StyledMenuComponent, LBStyledMenuComponent, MBStyledMenuComponent, RBStyledMenuComponent, RTStyledMenuComponent, LTStyledMenuComponent, MTStyledMenuComponent],
  exports:[MenuDemoComponent]
})
export class MenuDemoModule { }
