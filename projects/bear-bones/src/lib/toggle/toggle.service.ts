import { Injectable } from '@angular/core';
import { Observable, merge, of } from 'rxjs';
import { scan, switchMap, startWith  } from 'rxjs/operators';
import { BBToggleStateMap } from './toggle-state-map/toggle-state-map.model';
import { BBToggleActions, Init, BBToggleActionTypes } from './toggle.actions';
import { BBConditionalSourcesMap } from './conditional-sources-map/conditional-sources-map.model';

@Injectable({
  providedIn: 'root'
})
export class BBToggleService {

  constructor() { }

  createStateToggle$(
    toggleStates: BBToggleStateMap,
    initialState: string,
    primarySources: Observable<BBToggleActions>[],
    conditionalSources: BBConditionalSourcesMap): Observable<string> {

    return merge(...primarySources)
      .pipe(
        startWith(new Init()),
        scan((acc:string, val: BBToggleActions)=>{
          switch(val.type) {
            case BBToggleActionTypes.INIT: {
              acc = initialState;
              break;
            }
            case BBToggleActionTypes.TOGGLE: {
              acc = toggleStates[acc];
              break;
            }
            case BBToggleActionTypes.SET: {
              acc = val.payload;
              break;
            }
          }
          return acc;
        }, initialState),
        switchMap((state)=>{
          if(conditionalSources[state]) {
            return merge(of(state),conditionalSources[state]);
          }
          else {
            return of(state);
          }    
        }));
  }
}
