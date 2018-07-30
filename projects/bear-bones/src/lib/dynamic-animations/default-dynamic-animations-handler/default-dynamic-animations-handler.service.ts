import { BBDynamicAnimationsHandler } from '../dynamic-animations-handler/dynamic-animations-handler.model';
import { BBAnimationTransitions } from '../animation-transitions/animation-transitions.model';
import { BBStateCSSMap } from '../state-css-map/state-css-map.model';
import { BBStateCSSMapper } from '../state-css-mapper/state-css-mapper.model';
import { BBAnimationStateMachine } from '../animation-state-machine/animation-state-machine.model';
import { BBAnimationStatesService } from '../animation-states/animation-states.service';
import { BBStateCssMapperService } from '../state-css-mapper/state-css-mapper.service';

export class BBDefaultDynamicAnimationsHandlerService implements BBDynamicAnimationsHandler {

  constructor( 
    private element: any,
    private cssMapperService: BBStateCssMapperService,
    private animationStatesBuilder: BBAnimationStatesService
) {}

  private animationsStateMachine: BBAnimationStateMachine;
  private cssMapper: BBStateCSSMapper;
  private stateCache: string = '';
  private mapCache: BBStateCSSMap = {};
  private transitionsCache: BBAnimationTransitions = {};

  setCSSMap(map: BBStateCSSMap) {
    if(this.mapCache !== map) {
      this.mapCache = map;

      if(this.cssMapper) {
        this.cssMapper.removeAll();
        this.cssMapper.destroy();
      }

      this.cssMapper = this.cssMapperService
        .createStateCSSMapper(this.element,this.mapCache);
    }
  }

  nextState(toState:string) {
    if(this.stateCache !== toState) {
      this.stateCache = toState;

      if(this.animationsStateMachine) {
        this.animationsStateMachine.next(
          this.stateCache, 
          this.cssMapper);
      }
    }
  }

  setTransitions(transitions: BBAnimationTransitions) {
    if(this.transitionsCache !== transitions) {
      this.transitionsCache = transitions;

      if(this.animationsStateMachine) {

        if(this.cssMapper) {
          this.cssMapper.removeAll();
        }

        this.animationsStateMachine.destroy();
      }    

      this.animationsStateMachine = 
        this.animationStatesBuilder
          .createAnimationStateMachine(
            this.element,
            this.transitionsCache);
    }
  }

  init() {  
    console.log('init: ',
      this.cssMapperService,
      this.animationStatesBuilder
    );


    if(this.animationsStateMachine) {
      this.animationsStateMachine.init(
        this.stateCache,
        this.cssMapper);
    }
  }

  destroy() {
    this.animationsStateMachine.destroy();
    this.cssMapper.destroy();
    this.stateCache = null;
    this.mapCache = null;
    this.transitionsCache = null;
  }
}
