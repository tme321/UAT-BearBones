import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBDynamicAnimationsHandlerConstructorToken } from '../dynamic-animations-handler/dynamic-animations-handler.token';
import { BBDefaultDynamicAnimationsHandlerService } from './default-dynamic-animations-handler.service';
import { BBDynamicAnimationsModule } from '../dynamic-animations.module';

@NgModule({
  imports: [
    //CommonModule,
    BBDynamicAnimationsModule.forRoot(),
  ],
  declarations: []
})
export class BBDefaultDynamicAnimationsHandlerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBDefaultDynamicAnimationsHandlerModule,
      providers: [
        { 
          provide: BBDynamicAnimationsHandlerConstructorToken, 
          useValue: BBDefaultDynamicAnimationsHandlerService 
        }
      ]
    };
  }  

 }
