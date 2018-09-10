import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarDemoComponent } from './nav-bar-demo.component';
import { BBNavBarModule, CssMapperModule } from '@uat/bear-bones';

@NgModule({
  imports: [
    CommonModule,
	  RouterModule,
    BBNavBarModule,
    CssMapperModule,
  ],
  declarations: [NavBarDemoComponent],
  exports: [NavBarDemoComponent]
})
export class NavBarDemoModule { }
