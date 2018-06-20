import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBDynamicComponentDirective } from './dynamic-component.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BBDynamicComponentDirective],
  exports: [BBDynamicComponentDirective]
})
export class BBDynamicComponentModule { }
