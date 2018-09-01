import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaQueryDirective } from './media-query.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MediaQueryDirective],
  exports: [MediaQueryDirective]
})
export class BBMediaQueryModule { }
