import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBToggle } from './toggle.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  
  declarations: [
    BBToggle
  ],
  
  exports: [
	  BBToggle
  ]
})
export class BBToggleModule { }
