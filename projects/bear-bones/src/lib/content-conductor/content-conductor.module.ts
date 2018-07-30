import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BBContentConductorService } from './content-conductor.service';
import { BBContentDirective } from './content/content.directive';
import { BBContentConductorComponent } from './content-conductor.component';
import { BBContentContainerDirective } from './content-container/content-container.directive';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BBContentConductorModule,
      providers: [BBContentConductorService]
    };
  }
}
