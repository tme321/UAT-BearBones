import { AfterViewInit, OnDestroy, ContentChild, ViewChildren, QueryList, ViewChild, ElementRef, Input, ChangeDetectorRef, Optional } from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { Subject, Subscription, merge, fromEvent, Observable } from 'rxjs';
import { takeWhile, mapTo, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { StateCSSMap } from '@uat/dvk';
import { BBToggleDirective } from '../../toggle/toggle.directive';
import { CssMapNodeDirective } from '../../css-mapper/css-map-node/css-map-node.directive';
import { BBToggleService } from '../../toggle/toggle.service';
import { BBDocumentEventsSourceService } from '../document-events-source/document-events-source.service';
import { CssMapperDirective } from '../../css-mapper/css-mapper.directive';
import { StateCssMapperDirective } from '../../css-mapper/state-css-mapper/state-css-mapper.directive';
import { SetToggle, BBToggleActions } from './../../toggle/toggle.actions';
import { BBToggleStates } from './abstract-menu.states';

export abstract class AbstractMenuComponent implements AfterViewInit, OnDestroy {

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
    @Optional() protected stateCssMapper: StateCssMapperDirective
    ) {
      const afterViewInit = this.ngAfterViewInit.bind(this);
      const onDestroy = this.ngOnDestroy.bind(this);

      this.ngAfterViewInit = () => {
        if(afterViewInit){
          afterViewInit();
        }
        this.afterViewInit();
      }

      this.ngOnDestroy = () => {
        if(onDestroy) {
          onDestroy();
        }
        this.onDestroy();
      }
    }

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
  private afterViewInit() {
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
  private onDestroy() {
    if(this.togglerSub && !this.togglerSub.closed) {
      this.togglerSub.unsubscribe();
    }
  }

  /**
   * @ignore
   */
  ngAfterViewInit() {
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
  }
}
