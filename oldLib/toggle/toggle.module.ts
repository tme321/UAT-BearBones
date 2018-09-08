import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBToggle } from './toggle.component';
import { BBToggleDirective } from './toggle.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  
  declarations: [
    BBToggle,
    BBToggleDirective
  ],
  
  exports: [
    BBToggle,
    //BBToggleDirective
  ]
})
export class BBToggleModule { }
