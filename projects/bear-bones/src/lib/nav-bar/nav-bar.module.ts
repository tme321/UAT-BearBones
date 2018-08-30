import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MediaQueryModule } from '../media-query/media-query.module';
import { DynamicAnimationsModule, ContentConductorModule } from '@uat/dvk';

@NgModule({
  imports: [
    CommonModule,
    DynamicAnimationsModule,
    ContentConductorModule,
    MediaQueryModule
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent]
})
export class BBNavBarModule { }
