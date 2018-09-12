import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Optional,
  ViewChildren,
  ViewChild,
  QueryList,
  ContentChild, 
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy} from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { Subject, fromEvent, merge, Subscription } from 'rxjs';
import { takeWhile,distinctUntilChanged, debounceTime, mapTo } from 'rxjs/operators';
import { StateCSSMap } from '@uat/dvk';
import { CssMapperDirective, StateCssMapperDirective, CssMapNodeDirective } from '../css-mapper';
import { PanelTopDirective, PanelBottomDirective, PanelLeftDirective, PanelRightDirective } from './panel-positioning'
import { ToggleDirective } from '../toggle';
import { BBToggleService } from '../toggle/toggle.service';
import { Set, Toggle } from '../toggle/toggle.actions';

@Component({
  selector: '[bb-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  exportAs:'bbMenu',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BBMenu implements AfterViewInit, OnDestroy {

  /**
   * @ignore 
   */
  private panelSub = new Subject<string>();

  /**
   * @ignore
   */
  private togglerSub: Subscription;
  
  /**
   * @ignore
   */
  @ContentChild(ToggleDirective) toggle: ToggleDirective;

  /**
   * @ignore
   */
  @ViewChildren(CssMapNodeDirective) nodes: QueryList<CssMapNodeDirective>;

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
   * 
   */
  @ViewChild('panel',{read: ElementRef}) panel: ElementRef;

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
  @Input() closeOnClickOutside = false;

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
  panelState$ = this.panelSub.asObservable();

  constructor(   
    private cd: ChangeDetectorRef,
    private tSer: BBToggleService,
    @Optional() private cssMapper: CssMapperDirective,
    @Optional() private stateCssMapper: StateCssMapperDirective
    ) { }

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

    const onHover$ = merge(
      fromEvent(this.panel.nativeElement,'mouseenter'),
      this.toggle.toggleEntered)
      .pipe(
        takeWhile(()=>this.showOnHover),
        mapTo(BBToggleStates.OPEN));

    const onLeave$ = merge(
      fromEvent(this.panel.nativeElement,'mouseleave'),
      this.toggle.toggleLeft)
      .pipe(
        takeWhile(()=>this.showOnHover),
        mapTo(BBToggleStates.CLOSED));

    const hoverState$ = merge(
      onHover$,
      onLeave$)
      .pipe(
        debounceTime(150),
        distinctUntilChanged());

   const onClickOutside$ = fromEvent<MouseEvent>(document, 'click')
    .pipe(
      takeWhile(()=>this.closeOnClickOutside),
      mapTo(new Set(BBToggleStates.CLOSED)));
 
    const onClick$ = this.toggle.toggleClicked
      .pipe(
        takeWhile(()=>this.toggleOnClick),
        mapTo(new Toggle()));

    this.togglerSub = this.tSer.createStateToggle$({
        [BBToggleStates.OPEN]: BBToggleStates.CLOSED,
        [BBToggleStates.CLOSED]: BBToggleStates.OPEN
      },
      BBToggleStates.CLOSED,
      [onClick$, onClickOutside$],
      {
        [BBToggleStates.CLOSED]: hoverState$
      })
    .subscribe(state=>{
      this.panelSub.next(state);
    });

    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if(this.togglerSub && !this.togglerSub.closed) {
      this.togglerSub.unsubscribe();
    }
  }

}

export enum BBToggleStates {
  OPEN = 'open',
  CLOSED = 'closed'
}
