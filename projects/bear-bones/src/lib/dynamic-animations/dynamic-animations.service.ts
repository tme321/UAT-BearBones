import { Injectable, Inject } from '@angular/core';
import { BBDynamicAnimationsHandlerConstructor } from './dynamic-animations-handler/dynamic-animations-handler.constructor';
import { BBDynamicAnimationsHandlerConstructorToken } from './dynamic-animations-handler/dynamic-animations-handler.token';
import { BBStateCssMapperService } from './state-css-mapper/state-css-mapper.service';
import { BBAnimationStatesService } from './animation-states/animation-states.service';

/**
 * This import is required for ts to resolve the return of 
 * the createAnimationsHandler function.  Without it compilation
 * will fail.
 */
import { BBDynamicAnimationsHandler } from './dynamic-animations-handler/dynamic-animations-handler.model';

/*
import { BBAnimationStateMachine } from './animation-state-machine/animation-state-machine.model';
import { BBStateCSSMapper } from './state-css-mapper/state-css-mapper.model';
import { BBStateCSSMap } from './state-css-map/state-css-map.model';
import { BBAnimationTransitions } from './animation-transitions/animation-transitions.model';
*/

/**
 * This service is used to create a {@link BBDynamicAnimationsHandler} 
 * with the {@link BBDynamicAnimationsService.createAnimationsHandler} method.
 * 
 * The {@link BBDynamicAnimationsHandler} 
 * can be used to handle animations based on state transitions
 * for the specified element.
 * 
 * The {@link BBDynamicAnimationsHandler} can be wired up to a 
 * particular component or directive to automatically handle 
 * the animations for the specified element.
 * 
 * @example
 * `@Directive()`
 * export class AnimatedDirective {
 *   private animationsHandler: BBDynamicAnimationsHandler;
 * 
 *   `@Input()` set cssMap (map: BBStateCSSMap) {
 *     this.animationsHandler.setCSSMap(map);
 *   }
 * 
 *   `@Input()` set state(toState: string) {
 *     this.animationsHandler.nextState(toState);
 *   }
 * 
 *   `@Input()` set transitions(transitions: BBAnimationTransitions) {
 *     this.animationsHandler.setTransitions(transitions);
 *   }
 * 
 *   constructor(
 *     private elRef: ElementRef,
 *     private daService: DynamicAnimationsService,
 *   ) {
 *     this.animationsHandler = this.daService
 *       .createAnimationsHandler(this.elRef.nativeElement);
 *   }
 * 
 *   ngOnInit() {  
 *     this.animationsHandler.init();
 *   }
 * 
 *   ngOnDestroy() {
 *     this.animationsHandler.destroy();
 *   }
 * }
 * 
 */
@Injectable()
export class BBDynamicAnimationsService {

  constructor(
    @Inject(BBDynamicAnimationsHandlerConstructorToken) 
    private animationsHandlerConstructor: BBDynamicAnimationsHandlerConstructor,
    private cssMapperService: BBStateCssMapperService,
    private animationStatesBuilder: BBAnimationStatesService,
  ) { }

  /**
   * Create a {@link BBDynamicAnimationsHandler} for 
   * the given element.
   * 
   * See {@link DynamicAnimationsService} for example
   * usage.
   * 
   * @param element The element to attach the animations
   * handler to. 
   */
  createAnimationsHandler(element: any) {
    return new this.animationsHandlerConstructor(
      element,
      this.cssMapperService,
      this.animationStatesBuilder);
  }
}





    //private cssMapperService: BBStateCssMapperService,
    //private aStateBuilder: BBAnimationStatesService,










 /*
    let animationsStateMachine: BBAnimationStateMachine;
    let cssMapper: BBStateCSSMapper;
    let stateCache: string = '';
    let mapCache: BBStateCSSMap = {};
    let transitionsCache: BBAnimationTransitions = {};
    */

    /*

    return <BBDynamicAnimationsHandler>{
      setCSSMap: (map: BBStateCSSMap) => {
        if(mapCache !== map) {
          mapCache = map;

          if(cssMapper) {
            cssMapper.removeAll();
            cssMapper.destroy();
          }

          cssMapper = this.cssMapperService
            .createStateCSSMapper(element,mapCache);
        }
      },

      nextState: (toState:string) => {
        if(stateCache !== toState) {
          stateCache = toState;

          if(animationsStateMachine) {
            animationsStateMachine.next(
              stateCache, 
              cssMapper);
          }
        }
      },

      setTransitions: (transitions: BBAnimationTransitions) => {
        if(transitionsCache !== transitions) {
          transitionsCache = transitions;

          if(animationsStateMachine) {

            if(cssMapper) {
              cssMapper.removeAll();
            }

            animationsStateMachine.destroy();
          }    

          animationsStateMachine = 
            this.aStateBuilder
              .createAnimationStateMachine(
                element,
                transitionsCache);
        }
      },

      init: () => {  
        if(animationsStateMachine) {
          animationsStateMachine.init(
            stateCache,
            cssMapper);
        }
      },

      destroy: () => {
        animationsStateMachine.destroy();
        cssMapper.destroy();
        stateCache = null;
        mapCache = null;
        transitionsCache = null;
      }
    }
    */














