import { Component, OnInit, Inject, ElementRef, Input, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, AnimationPlayer, AnimationEvent, animate, style } from '@angular/animations';
import { AlternatingPanelCSSClasses } from './alternating-panel.css-model';
import { AltPanelState1Animation, AltPanelState2Animation } from './alternating-panel.tokens';

/**
 * 
 */
@Component({
  selector: '[bb-alt-panel]',
  templateUrl: './alternating-panel.component.html',
  styleUrls: ['./alternating-panel.component.css'],
  animations: [],
  exportAs: 'bbAltPanel',
})
export class BBAlternatingPanelComponent implements OnInit {

  /**
   * Defintes the css classes the panel will use.
   */
  @Input() css: AlternatingPanelCSSClasses;

  /**
   * Save the animation to play when
   * transitioning from state 2 to state 1.
   */
  private state1Player: AnimationPlayer;

  /**
   * Save the animation to play when
   * transitioning from state 1 to state 2.
   */
  private state2Player: AnimationPlayer;

  /**
   * Store the current panel state for determining 
   * the next transition.
   */
  private panelStateCache  = 'init';

  /**
   * Determine the transition to make when
   * the state changes.
   * 
   * If the state is transitioned back to init
   * or the transition is unrecognized then play 
   * no animation and remove either state
   * css class that was applied. 
   */
  private set panelState(state: 'init' | 'state1' | 'state2') {
    if(state !== this.panelStateCache) {
      if(this.panelStateCache !== 'init') {
        if(this.panelStateCache === 'state2' && state === 'state1') {
          this.transitionToState1();
        }        
        else if(this.panelStateCache === 'state1' && state === 'state2') {
          this.transitionToState2();
        } 
        else {
          this.clearCSSStateClasses();
        }
        
      }
      else {
        if(state === 'state1') {
          this.renderer.addClass(this.elRef.nativeElement,this.css.state1);
        }
        else if(state === 'state2') {
          this.renderer.addClass(this.elRef.nativeElement,this.css.state2);
        }
      }
      this.panelStateCache = state;
    }
    
  };

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private aBuilder: AnimationBuilder,
    @Inject(AltPanelState1Animation)
    private state1Animation: AnimationMetadata | AnimationMetadata[],
    @Inject(AltPanelState2Animation)
    private state2Animation: AnimationMetadata | AnimationMetadata[],
  ) { }

  ngOnInit() {
    this.buildAnimations();

    console.log(`css: ${JSON.stringify(this.css)}`);

    console.log(`states: ${this.css.state1} & ${this.css.state2}`);

    this.renderer.addClass(this.elRef.nativeElement,this.css.panel);

    this.toggle('state1');
  }

  /**
   * Transition the panel to the next state.  If no
   * next state is passed in the order will be:
   * 
   * init -> state1 -> state2 -> state1 -> state2...
   * 
   * @param state The next state to transition to.
   */
  toggle(state?: string) {
    console.log('toggling');
    state = state || this.panelStateCache;
    switch(state) {
      case 'init': {
        this.panelState = 'state1';
        break;
      }
      case 'state1': {
        this.panelState = 'state2';
        break;
      }
      case 'state2': {
        this.panelState = 'state1';
        break;
      }
    }
  }

  /**
   * Build the animations injected through the tokens 
   * to play when transitions happen.
   */
  private buildAnimations() {
    this.state1Player = 
      this.aBuilder.build(this.state1Animation)
        .create(this.elRef.nativeElement);

    this.state2Player = 
      this.aBuilder.build(this.state2Animation)
        .create(this.elRef.nativeElement);
  }

  /**
   * Transition to state 1, removing the state 2 css class  
   * if it exists, play the animation, and set the state 1 
   * css class.
   */
  private transitionToState1() {
    this.renderer.removeClass(this.elRef.nativeElement,this.css.state2);
    this.renderer.addClass(this.elRef.nativeElement,this.css.state1);
    if(this.state2Player) { this.state2Player.reset(); }
    this.state1Player.play();
  }

  /**
   * Transition to state 2, removing the state 1 css class  
   * if it exists, play the animation, and set the state 2 
   * css class.
   */
  private transitionToState2() {
    this.renderer.removeClass(this.elRef.nativeElement,this.css.state1);
    this.renderer.addClass(this.elRef.nativeElement,this.css.state2);
    if(this.state1Player) { this.state1Player.reset(); }
    this.state2Player.play();      
  }

  /**
   * Clear both the state 1 and state 2 css classes if they exist.
   */
  private clearCSSStateClasses() {
    this.renderer.removeClass(this.elRef.nativeElement,this.css.state1);
    this.renderer.removeClass(this.elRef.nativeElement,this.css.state2);
  }
}
