import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuDemoComponent } from './side-menu-demo.component';
import { StyledSideMenuComponent } from './styled-side-menu/styled-side-menu.component';
import { BBSideMenuModule, CssMapperModule, BBToggleModule, BBCommonModule } from '@uat/bear-bones';
import { StyledLeftMenuComponent } from './styled-side-menu/styled-left-menu.component';
import { StyledOTLeftMenuComponent } from './styled-side-menu/styled-otleft-menu.component';
import { StyledOTRightMenuComponent } from './styled-side-menu/styled-otright-menu.component';
import { StyledRightMenuComponent } from './styled-side-menu/styled-right-menu.component';
import { StyledTOPLeftComponent } from './styled-side-menu/styled-topleft.component';
import { StyledTOPRightComponent } from './styled-side-menu/styled-topright.component';

@NgModule({
  imports: [
    CommonModule,
    BBCommonModule,
    BBSideMenuModule,
    CssMapperModule,
    BBToggleModule
  ],
  declarations: [SideMenuDemoComponent, StyledSideMenuComponent, StyledLeftMenuComponent, StyledOTLeftMenuComponent, StyledOTRightMenuComponent, StyledRightMenuComponent, StyledTOPLeftComponent, StyledTOPRightComponent],
  exports: [SideMenuDemoComponent]
})
export class SideMenuDemoModule { }
