import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBAlternatingPanelComponent } from './alternating-panel.component';
import { BBAlternatingPanelDirective } from './alternating-panel.directive';


@NgModule({
  imports: [
    //CommonModule,
    //BBDynamicAnimationsModule.forRoot(),
  ],
  
  declarations: [
    BBAlternatingPanelComponent,
    BBAlternatingPanelDirective, 
  ],

  exports: [
    BBAlternatingPanelComponent,
    BBAlternatingPanelDirective
  ]
})
export class BBAlternatingPanelModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBAlternatingPanelModule,
      providers: [
        //BBAnimationStatesService,
        //BBStateCssMapperService
      ]
    };
  }  
}
