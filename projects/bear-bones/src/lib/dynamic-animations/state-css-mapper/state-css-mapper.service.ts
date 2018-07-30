import { Injectable, RendererFactory2 } from '@angular/core';
import { BBStateCSSMapper } from './state-css-mapper.model';
import { BBStateCSSMap } from '../state-css-map/state-css-map.model';

/**
 * This service creates a closure that handles 
 * adding and removing css classes form a given element
 * based on the {@link BBStateCSSMap}.
 */
@Injectable()
export class BBStateCssMapperService {

  constructor(private rendererFactory: RendererFactory2) {
  }

  /**
   * Get the css class for the given state.
   * 
   * @param state The state.
   * @param map The {@link BBStateCSSMap} to look the state up in.
   */
  getCSSClass(state:string, map: BBStateCSSMap) {
    return map && map[state];
  }

  /**
   * Create the {@link BBStateCSSMapper} to apply to the given element.
   * 
   * @param element The element to apply the css classes to.
   * @param map The {@link BBStateCSSMap} that defines the css classes and states.
   */
  createStateCSSMapper(element: any, map: BBStateCSSMap) {
    let renderer = this.rendererFactory.createRenderer(element,null);

    return <BBStateCSSMapper>{
      remove: (state:string)=> {
        renderer.removeClass(element,this.getCSSClass(state,map));
      },
      add: (state:string)=> {
        renderer.addClass(element,this.getCSSClass(state,map));
      },
      removeAll: ()=> {
        Object.keys(map).forEach(entry=>renderer.removeClass(element, map[entry]));
      },
      destroy: ()=> {
        renderer.destroy();
        renderer = null;
      }
    }
  }
}
