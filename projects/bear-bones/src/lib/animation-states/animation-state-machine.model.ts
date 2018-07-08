import { BBStateCSSMapper } from "./state-css-mapper/state-css-mapper.service";

export interface BBAnimationStateMachine {
    init: (state:string, mapper?: BBStateCSSMapper)=>void;
    next: (nextState: string, mapper?: BBStateCSSMapper)=>string;
    destroy: ()=>void;
  }
  