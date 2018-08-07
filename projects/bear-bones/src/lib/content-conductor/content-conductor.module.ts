import { BBDefaultContentConductorService } from './default-content-conductor/default-content-conductor.service';
import { BBContentConductorConstructorToken } from './content-conductor-constructor/content-conductor-constructor.token';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBContentConductorService } from './content-conductor.service';
import { BBContentDirective } from './content/content.directive';
import { BBContentConductorComponent } from './content-conductor.component';
import { BBContentContainerDirective } from './content-container/content-container.directive';
import { BBContentConductorConstructor } from './content-conductor-constructor/content-conductor-constructor.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BBContentDirective, 
    BBContentConductorComponent, 
    BBContentContainerDirective, 
  ],
  exports: [
    BBContentDirective, 
    BBContentConductorComponent, 
    BBContentContainerDirective
  ]
})
export class BBContentConductorModule {
  static forRoot(conductorConstructor: BBContentConductorConstructor = BBDefaultContentConductorService): ModuleWithProviders {
    return {
      ngModule: BBContentConductorModule,
      providers: [
        BBContentConductorService,
        { 
          provide: BBContentConductorConstructorToken, 
          useValue: conductorConstructor  
        }
      ]
    };
  }
}
