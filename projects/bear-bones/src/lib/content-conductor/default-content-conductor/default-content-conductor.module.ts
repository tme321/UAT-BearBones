import { NgModule, ModuleWithProviders } from '@angular/core';
import { BBContentConductorConstructorToken } from '../content-conductor-constructor/content-conductor-constructor.token';
import { BBDefaultContentConductorService } from './default-content-conductor.service';

@NgModule({
  imports: [],
  declarations: [],
})
export class BBDefaultContentConductorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBDefaultContentConductorModule,
      providers: [
        { 
          provide: BBContentConductorConstructorToken, 
          useValue: BBDefaultContentConductorService  
        }
      ]
    };
  }
}
