import { Observable } from "rxjs";

export interface BBConditionalSourcesMap {
    [state:string]: Observable<string>;
  }
  
  