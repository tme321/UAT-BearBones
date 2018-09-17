import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBToggleDirective } from './toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BBToggleDirective],
  exports: [BBToggleDirective]
})
export class BBToggleModule {
}
