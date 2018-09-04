import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { BBMediaQueryModule } from '../media-query/media-query.module';
import { DynamicAnimationsModule, ContentConductorModule } from '@uat/dvk';
import { CssMapperModule } from '../css-mapper/css-mapper.module';
import { NavItemEndDirective } from './nav-item-end/nav-item-end.directive';
import { NavItemDirective } from './nav-item/nav-item.directive';
import { NavBeginContainerDirective } from './nav-begin-container/nav-begin-container.directive';
import { NavEndContainerDirective } from './nav-end-container/nav-end-container.directive';
import { NavBarToggleDirective, NavBarLeftToggleDirective, NavBarAfterBrandToggleDirective } from './nav-bar-toggle/nav-bar-toggle.directive';

@NgModule({
  imports: [
    CommonModule,
    DynamicAnimationsModule,
    ContentConductorModule,
    BBMediaQueryModule,
    CssMapperModule,
  ],
  exports: [
    NavBarComponent,
    NavItemDirective,
    NavItemEndDirective, 
    NavBeginContainerDirective, 
    NavEndContainerDirective,
    NavBarToggleDirective,
    NavBarLeftToggleDirective, 
    NavBarAfterBrandToggleDirective
  ],
  declarations: [
    NavBarComponent, 
    NavItemDirective,
    NavItemEndDirective, 
    NavBeginContainerDirective, 
    NavEndContainerDirective, 
    NavBarToggleDirective,
    NavBarLeftToggleDirective, 
    NavBarAfterBrandToggleDirective
  ]
})
export class BBNavBarModule { }
