import { BBAnimationStatesService } from '../animation-states/animation-states.service';
import { BBStateCssMapperService } from '../state-css-mapper/state-css-mapper.service';
import { BBAnimationTransitions } from '../animation-transitions/animation-transitions.model';
import { BBStateCSSMap } from '../state-css-map/state-css-map.model';

/**
 * Describe the interface for providing a component 
 * or directive with run time specified animations 
 * based on a series of string transitions.
 * 
 * @method setCSSMap Set the map of css classes to apply at specific states.
 * @method nextState Transition to the next state.
 * @method setTransitions Set the map of animations to make on specific state 
 * transitions.
 * @method init Initialize the handler.  Should usually be called in ngOnInit
 * @method destroy Release the references for garbage collection.  Should 
 * usually be called in ngOnDestroy.
 */
export interface BBDynamicAnimationsHandler {
    setCSSMap: (map: BBStateCSSMap) =>void;
    nextState: (toState:string) => void;
    setTransitions: (transitions: BBAnimationTransitions) => void;
    init: () => void;
    destroy: () => void;
}
