import { Directive, Input, ElementRef } from '@angular/core';
import { BBDynamicAnimationsService } from '../dynamic-animations/dynamic-animations.service';
import { BBAnimationTransitions } from '../dynamic-animations/animation-transitions/animation-transitions.model';
import { BBDynamicAnimationsHandler } from '../dynamic-animations/dynamic-animations-handler/dynamic-animations-handler.model';
import { BBStateCSSMap } from '../dynamic-animations/state-css-map/state-css-map.model';

@Directive({
  selector: '[bbAlternatingPanel]'
})
export class BBAlternatingPanelDirective {
  private animationsHandler: BBDynamicAnimationsHandler;

  @Input() set cssMap (map: BBStateCSSMap) {
    this.animationsHandler.setCSSMap(map);
  }

  @Input() set state(toState: string) {
    this.animationsHandler.nextState(toState);
  }

  @Input() set transitions(transitions: BBAnimationTransitions) {
    this.animationsHandler.setTransitions(transitions);
  }

  constructor(
    private elRef: ElementRef,
    private daServ: BBDynamicAnimationsService,
  ) {
    this.animationsHandler = this.daServ
      .createAnimationsHandler(this.elRef.nativeElement);
  }

  ngOnInit() {  
    this.animationsHandler.init();
  }

  ngOnDestroy() {
    this.animationsHandler.destroy();
  }
  
}
