import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBMenuItem } from './menu-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BBMenuItem,
  ],
  exports: [
    BBMenuItem,
  ]
})
export class BBCommonModule {
  /*
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBCommonModule,
      providers: []
    };
  }
  */
 }
