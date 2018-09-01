import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { BBMediaQueryModule } from '../media-query/media-query.module';
import { DynamicAnimationsModule, ContentConductorModule } from '@uat/dvk';
import { NavItemDirective } from './nav-item/nav-item.directive';
import { NavItemRightDirective } from './nav-item-right/nav-item-right.directive';

@NgModule({
  imports: [
    CommonModule,
    DynamicAnimationsModule,
    ContentConductorModule,
    BBMediaQueryModule,
  ],
  exports: [NavBarComponent, NavItemDirective, NavItemRightDirective],
  declarations: [NavBarComponent, NavItemDirective, NavItemRightDirective]
})
export class BBNavBarModule { }
