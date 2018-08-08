import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBDynamicComponentDirective } from './dynamic-component.directive';
import { BBDynamicComponentSerializerService } from './dynamic-component-serializer/dynamic-component-serializer.service';
import { BBDynamicComponentDirective2 } from './dynamic-component2.directive';
import { BBDynamicComponentSerializerConstructorToken } from './dynamic-component-serializer/dynamic-component-serializer.token';
import { BBDefaultDynamicComponentSerializer } from './default-dynamic-component-serializer/default-dynamic-component-serializer';
import { BBDynamicComponentSerializerConstructor } from './dynamic-component-serializer/dynamic-component-serializer.constructor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BBDynamicComponentDirective, 
    BBDynamicComponentDirective2
  ],
  exports: [
    BBDynamicComponentDirective, 
    BBDynamicComponentDirective2
  ]
})
export class BBDynamicComponentModule {
  static forRoot(
    serializerConstrutor: BBDynamicComponentSerializerConstructor = BBDefaultDynamicComponentSerializer
  ): ModuleWithProviders {
    return {
      ngModule: BBDynamicComponentModule,
      providers: [
        BBDynamicComponentSerializerService,
        { 
          provide: BBDynamicComponentSerializerConstructorToken,
          useValue: serializerConstrutor
        }
      ]
    };
  }  
 }

 