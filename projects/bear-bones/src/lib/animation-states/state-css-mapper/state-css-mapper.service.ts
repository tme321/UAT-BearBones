import { Injectable, RendererFactory2 } from '@angular/core';
import { BBStateCSSMap } from './state-css-mapper.model';

@Injectable()
export class BBStateCssMapperService {

  getCSSClass(state:string, map: BBStateCSSMap) {
    return map && map[state];
  }

  constructor(private rendererFactory: RendererFactory2) {
  }

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

export interface BBStateCSSMapper {
  remove: (state:string)=>void;
  removeAll: ()=>void;
  add: (state:string)=> void;
  destroy: ()=> void;
}
