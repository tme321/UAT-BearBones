import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { BBAnimationStatesService } from '../animation-states/animation-states.service';
import { BBAnimationTransitions } from '../animation-states/animation-transitions.model';
import { BBAnimationStateMachine } from '../animation-states/animation-state-machine.model';
import { BBStateCSSMap } from '../animation-states/state-css-mapper/state-css-mapper.model';
import { BBStateCssMapperService, BBStateCSSMapper } from '../animation-states/state-css-mapper/state-css-mapper.service';

@Directive({
  selector: '[bbAlternatingPanel]'
})
export class BBAlternatingPanelDirective {

  private animationsStateMachine: BBAnimationStateMachine;
  private cssMapper: BBStateCSSMapper;

  private stateCache: string;
  private mapCache: BBStateCSSMap;
  private transitionsCache: BBAnimationTransitions;
  /**
   * Defintes the css classes the panel will use.
   */
  @Input() set css (map: BBStateCSSMap) {
    if(this.mapCache != map) {
      this.mapCache = map;

      if(this.cssMapper) {
        this.cssMapper.removeAll();
        this.cssMapper.destroy();
      }

      this.cssMapper = this.cssMapperService.createStateCSSMapper(
        this.elRef.nativeElement,
        this.mapCache);
    }
  }

  @Input() set state(toState:string) {
    if(this.stateCache != toState) {
      this.stateCache = toState;

      if(this.animationsStateMachine) {
        this.animationsStateMachine.next(this.stateCache, this.cssMapper);
      }
    }
  }

  @Input() set transitions(transitions: BBAnimationTransitions) {
    if(this.transitionsCache != transitions) {
      this.transitionsCache = transitions;

      if(this.animationsStateMachine) {

        if(this.cssMapper) {
          this.cssMapper.removeAll();
        }

        this.animationsStateMachine.destroy();
      }    

      this.animationsStateMachine = 
        this.bbBuilder
          .createAnimationStateMachine(
            this.elRef.nativeElement,
            this.transitionsCache);
    }
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private bbBuilder: BBAnimationStatesService,
    private cssMapperService: BBStateCssMapperService
  ) { }

  ngOnInit() {  
    if(this.animationsStateMachine) {
      this.animationsStateMachine.init(this.stateCache,this.cssMapper);
    }
  }
}
