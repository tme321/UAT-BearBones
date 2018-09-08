import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarDemoComponent } from './nav-bar-demo.component';
import { BBToggleModule, BBNavBarModule, CssMapperModule } from '@uat/bear-bones';

@NgModule({
  imports: [
    CommonModule,
    BBNavBarModule,
    CssMapperModule,
  ],
  declarations: [NavBarDemoComponent],
  exports: [NavBarDemoComponent]
})
export class NavBarDemoModule { }
