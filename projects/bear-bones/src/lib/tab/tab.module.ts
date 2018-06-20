import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabService } from './tab.service';
import { TabDirective } from './tab.directive';
import { TabContentDirective } from './tab-content.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  
  declarations: [
    TabDirective,
    TabContentDirective
  ],
  
  exports: [
    TabDirective,
    TabContentDirective
  ]
})
export class BBTabModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBTabModule,
      providers: [TabService]
    };
  }
 }
