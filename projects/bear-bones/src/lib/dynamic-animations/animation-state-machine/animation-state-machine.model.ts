import { BBStateCSSMapper } from "../state-css-mapper/state-css-mapper.model";

/**
 * The shape of an animation state machine to be used by a component or
 * directive that wants to provide dynamic animations.
 * 
* @method init Initialize the state and css class of the state machine.
* @method next Transition the state from the current state to the next state, 
* playing any animations and applying any css classes as defined.
* @method destroy Release the references held by the closure created for 
* the state machine.
*/
export interface BBAnimationStateMachine {
    init: (state:string, mapper?: BBStateCSSMapper)=>void;
    next: (nextState: string, mapper?: BBStateCSSMapper)=>string;
    destroy: ()=>void;
  }
  