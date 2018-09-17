import { Component, ChangeDetectionStrategy, ContentChild, AfterViewInit, Optional, ViewChildren, QueryList, ViewChild, ElementRef, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { Subject, Subscription, Observable, fromEvent, merge } from 'rxjs';
import { takeWhile, mapTo, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StateCSSMap } from '@uat/dvk';
import { BBDocumentEventsSourceService, BBToggleStates, PanelTopDirective, PanelBottomDirective, PanelJustifyLeftDirective, PanelJustifyRightDirective } from '../common';
import { BBToggleDirective, BBToggleService, Toggle, BBToggleActions, SetToggle } from '../toggle';
import { CssMapNodeDirective, CssMapperDirective, StateCssMapperDirective } from '../css-mapper';

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
  protected panelSub = new Subject<string>();

  /**
   * @ignore
   */
  protected togglerSub: Subscription;
  
  /**
   * @ignore
   */
  protected openSub = new Subject();

  /**
   * @ignore
   */
  protected closeSub = new Subject();

  /**
   * @ignore
   */
  protected toggleSources: Observable<BBToggleActions>[] = [];

  /**
   * @ignore
   */
  @ContentChild(BBToggleDirective) toggle: BBToggleDirective;

  /**
   * @ignore
   */
  @ViewChildren(CssMapNodeDirective) nodes: QueryList<CssMapNodeDirective>;

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
    protected cd: ChangeDetectorRef,
    protected tSer: BBToggleService,
    protected deServ: BBDocumentEventsSourceService,
    @Optional() protected cssMapper: CssMapperDirective,
    @Optional() protected stateCssMapper: StateCssMapperDirective,
    @Optional() public top: PanelTopDirective,
    @Optional() public bottom: PanelBottomDirective,
    @Optional() public left: PanelJustifyLeftDirective,
    @Optional() public right: PanelJustifyRightDirective,  
    ) {}

  /**
   * Close the menu
   */
  close() {
    this.closeSub.next();
  }

  /**
   * Open the menu
   */
  open() {
    this.openSub.next();
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

    const click$ = this.toggle.toggleClicked
      .pipe(
        takeWhile(()=>this.toggleOnClick),
        mapTo(new Toggle()));

    this.toggleSources.push(click$);
  

    const open$ = this.openSub.pipe(
      mapTo(new SetToggle(BBToggleStates.OPEN)));

    const close$ = this.closeSub.pipe(
      mapTo(new SetToggle(BBToggleStates.CLOSED)));
  
    const clickOutside$ = this.deServ.click$
      .pipe(
       takeWhile(()=>this.closeOnClickOutside),
       mapTo(new SetToggle(BBToggleStates.CLOSED)));
 
    this.toggleSources.push(clickOutside$, open$, close$);

    this.togglerSub = this.tSer.createStateToggle$({
        [BBToggleStates.OPEN]: BBToggleStates.CLOSED,
        [BBToggleStates.CLOSED]: BBToggleStates.OPEN
      },
      BBToggleStates.CLOSED,
      this.toggleSources,
      {
        [BBToggleStates.CLOSED]: hoverState$
      })
    .subscribe(state=>{
      this.panelSub.next(state);
    });

    this.cd.detectChanges();
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
    if(this.togglerSub && !this.togglerSub.closed) {
      this.togglerSub.unsubscribe();
    }
  }
}
