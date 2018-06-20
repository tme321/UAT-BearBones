import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBCommonModule } from '../common/common.module';
import { BBCollapsingMenu } from './collapsing-menu.component';
import { BBSlidingPanelModule } from '../sliding-panel/sliding-panel.module';

@NgModule({
  imports: [
    CommonModule,
    BBCommonModule,
    BBSlidingPanelModule
  ],
  declarations: [BBCollapsingMenu],
  exports: [BBCollapsingMenu]
})
export class BBCollapsingMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBCollapsingMenuModule,
      providers: []
    };
  }
 }
