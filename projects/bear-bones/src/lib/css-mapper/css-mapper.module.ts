import { NgModule, ModuleWithProviders } from '@angular/core';
import { CssMapperDirective } from './css-mapper.directive';
import { CssMapNodeDirective } from './css-map-node/css-map-node.directive';
import { StateCssMapperService } from './state-css-mapper/state-css-mapper.service';
import { StateCssMapperConstructor } from './state-css-mapper/state-css-mapper.constructor';
import { StateCssMapperConstructorToken } from './state-css-mapper/state-css-mapper.token';
import { StateCssMapperDirective } from './state-css-mapper/state-css-mapper.directive';

@NgModule({
  imports: [
  ],
  declarations: [CssMapperDirective, CssMapNodeDirective, StateCssMapperDirective],
  exports: [CssMapperDirective, CssMapNodeDirective, StateCssMapperDirective],
  providers: [StateCssMapperService]
})
export class CssMapperModule {
  static forRoot(stateCssMapperConstructor: StateCssMapperConstructor): ModuleWithProviders {
    return {
      ngModule: CssMapperModule,
      providers: [
        { 
          provide: StateCssMapperConstructorToken, 
          useValue: stateCssMapperConstructor 
        }
      ]
    }
  }
 }
