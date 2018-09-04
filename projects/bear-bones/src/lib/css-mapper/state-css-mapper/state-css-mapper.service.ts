import { Injectable, Inject, Renderer2, QueryList } from '@angular/core';
import { StateCssMap } from './state-css-map/state-css-map.model';
import { StateCssMapperConstructorToken } from './state-css-mapper.token';
import { StateCssMapperConstructor } from './state-css-mapper.constructor';
import { StateCssMapper } from './state-css-mapper.model';
import { CssMapNodeDirective } from './../css-map-node/css-map-node.directive';

/**
 * This service creates a closure that handles 
 * adding and removing css classes form a given element
 * based on the {@link StateCSSMap}.
 */
@Injectable()
export class StateCssMapperService {

  constructor(
    private renderer: Renderer2,
    @Inject(StateCssMapperConstructorToken)
    private scmConstructor: StateCssMapperConstructor) {
  }

  /**
   * Create the {@link StateCssMapper} to apply to the given element.
   */
  createStateCSSMapper(
    nodesQl: QueryList<CssMapNodeDirective>,
    statesCssMap: StateCssMap):StateCssMapper {

    return new this.scmConstructor(
      this.renderer,
      nodesQl,
      statesCssMap
    );
  }
}
