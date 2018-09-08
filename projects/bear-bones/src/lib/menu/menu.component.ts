import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Optional,
  ViewChildren,
  QueryList,
  ContentChild} from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { Observable, Subject } from 'rxjs';
import { startWith, scan, tap } from 'rxjs/operators';
import { StateCSSMap } from '@uat/dvk';
import { CssMapperDirective, StateCssMapperDirective, CssMapNodeDirective } from '../css-mapper';
import { PanelTopDirective, PanelBottomDirective, PanelLeftDirective, PanelRightDirective } from './panel-positioning'
import { ToggleDirective } from '../toggle';
import { stateToggler } from '../common';

@Component({
  selector: '[bb-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  exportAs:'bbMenu',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BBMenu {
  
  /**
   * @ignore
   */
  @ContentChild(ToggleDirective) toggle: ToggleDirective;

  /**
   * @ignore
   */
  @ViewChildren(CssMapNodeDirective)
  nodes: QueryList<CssMapNodeDirective>;

  /**
   * @ignore
   */
  @ContentChild(PanelTopDirective) top: PanelTopDirective;

  /**
   * @ignore
   */
  @ContentChild(PanelBottomDirective) bottom: PanelBottomDirective;

  /**
   * @ignore
   */
  @ContentChild(PanelLeftDirective) left: PanelLeftDirective;

  /**
   * @ignore
   */
  @ContentChild(PanelRightDirective) right: PanelRightDirective;

  /**
   * A trigger for the button being clicked
   * @ignore
   */
  toggle$ = new Subject<null>();

  /**
   * @ignore
   */
  private toggler = stateToggler({ 'open': 'closed', 'closed':'open'});

  /**
   * 
   */
  @Input() public showOnHover = false;

  /**
   * 
   */
  @Input() public toggleOnClick = true;

  /**
   * 
   */
  @Input() public closeOnClickOutside = true;

  /**
   * The animations to apply to the dropdown as it transitions between the
   * `'open'` and `'closed'` states.
   */
  @Input() panelAnimations: (AnimationTransitionMetadata | AnimationStateMetadata)[] = [];

  /**
   * The map of css classes that will be added and removed as
   * the animation plays. 
   */
  @Input() animationsCssMap: StateCSSMap = {};

  /**
   * A stream of states toggling between 'open' and 'closed'
   * @ignore
   */
  panelState$: Observable<string>;

  constructor(    
    @Optional() private cssMapper: CssMapperDirective,
    @Optional() private stateCssMapper: StateCssMapperDirective
    ) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.panelState$ = this.toggle$.pipe(
      startWith('closed'),
      scan(this.toggler)
    );
  }

  /**
   * @ignore
   */
  ngAfterViewInit() {
    if(this.cssMapper) {
      this.cssMapper.init(this.nodes,'menu');
    }

    if(this.stateCssMapper) {
      this.stateCssMapper.init(this.nodes,'menu');
    }

    this.toggle.toggleClicked
    .subscribe(_=>{ 
      this.toggle$.next();
    });
  }
}
