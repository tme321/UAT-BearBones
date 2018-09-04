import { Component, OnInit, AfterViewInit, ViewChildren, ContentChildren, QueryList, ViewChild, Input, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy, Optional, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { Observable, Subject, combineLatest, fromEvent, Subscription } from 'rxjs';
import { ContentConductorService, ContentContainerDirective, ContentConductor, ContentContainer, Content, StateCSSMap } from '@uat/dvk';
import { MediaQueryDirective } from '../media-query/media-query.directive';
import { distinctUntilChanged, map, scan, startWith, tap } from 'rxjs/operators';
import { stateToggler } from '../common/state-toggler.fn';
import { NavItemDirective } from './nav-item/nav-item.directive';
import { NavItemEndDirective } from './nav-item-end/nav-item-end.directive';
import { CssMapperDirective } from '../css-mapper/css-mapper.directive';
import { CssMapNodeDirective } from '../css-mapper/css-map-node/css-map-node.directive';
import { NavBeginContainerDirective } from './nav-begin-container/nav-begin-container.directive';
import { NavEndContainerDirective } from './nav-end-container/nav-end-container.directive';
import { StateCssMapperDirective } from '../css-mapper/state-css-mapper/state-css-mapper.directive';
import { NavBarToggleDirective, NavBarLeftToggleDirective, NavBarAfterBrandToggleDirective } from './nav-bar-toggle/nav-bar-toggle.directive';




/**
 * 
 */
@Component({
  selector: 'div[bb-nav-bar] | nav[bb-nav-bar]',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  exportAs: 'bbNavBar',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  /**
   * Resolve the media query
   * @ignore
   */
  @ViewChild(MediaQueryDirective) mq: MediaQueryDirective;
  
  /**
   * @ignore
   */
  @ViewChildren(CssMapNodeDirective)
  nodes: QueryList<CssMapNodeDirective>;

  /**
   * Resolve the contents supplied by the user.
   * @ignore
   */
  @ViewChildren(ContentContainerDirective)
  containers: QueryList<ContentContainerDirective>;

  /**
   * Resolve the left/top content.
   * @ignore
   */
  @ContentChildren(NavItemDirective,{ descendants: true }) 
  itemsContents: QueryList<Content>;

  /**
   * Resolve the right/bottom content.
   * @ignore
   */
  @ContentChildren(NavItemEndDirective,{ descendants: true }) 
  itemsEndContents: QueryList<Content>;


  /**
   * Resolve the left/top content.
   * @ignore
   */
  @ContentChildren(NavBeginContainerDirective,{ descendants: true }) 
  beginContents: QueryList<Content>;

    /**
   * Resolve the right/bottom content.
   * @ignore
   */
  @ContentChildren(NavEndContainerDirective,{ descendants: true }) 
  endContents: QueryList<Content>;

  /**
   * @ignore
   */
  @ContentChild(NavBarToggleDirective) toggleDirective: NavBarToggleDirective;

  /**
   * @ignore
   */
  @ContentChild(NavBarLeftToggleDirective) toggleLeftDirective : NavBarLeftToggleDirective;

  /**
   * @ignore
   */
  @ContentChild(NavBarAfterBrandToggleDirective) toggleAbDirective: NavBarAfterBrandToggleDirective;

  /**
   * The animations to apply to the panel as it transitions between the
   * `'open'` and `'closed'` states.
   */
  @Input() panelAnimations: (AnimationTransitionMetadata | AnimationStateMetadata)[] = [];

  /**
   * The map of css classes that will be added and removed as
   * the animation plays. 
   */
  @Input() animationsCssMap: StateCSSMap = {};

  /**
   * A string as a media query.  When this media query is 
   * evaluted as true the panel will be in the expanded state 
   * where the menu items are displayed inside the bar.
   * 
   * When it is false the items will be put inside a panel 
   * that opens and closes controlled by the toggle.
   * 
   * @default "(min-width : 1024px)"
   */
  @Input() expandOnQuery: string = "(min-width : 1024px)";

  /**
   * The observable stream to determine when to run the media 
   * query `expandOnQuery`.
   *    
   * @default fromEvent(window,"resize")
   */
  @Input() expandEvent$: Observable<Event> = fromEvent(window,"resize");

  /**
   * A stream of the state of the panel.
   * This can be combined with the `exportAs` value `'bbNavBar'`
   * in order to determinet the state of the panel
   * from outside the component.
   */
  isOpen$: Observable<boolean>;

  /**
   * A stream of the media query results.
   * This can be combined with the `exportAs` value `'bbNavBar'`
   * to determine if the navbar is currently expanded or
   * collapsed from outside the component.
   */
  isExpanded$: Observable<boolean>;

  /**
   * A trigger for the button being clicked
   * @ignore
   */
  toggle$ = new Subject<null>();

  /**
   * A stream of states toggling between 'open' and 'closed'
   * @ignore
   */
  panelState$: Observable<string>;

  /**
   * @ignore
   */
  private conductor: ContentConductor<ContentContainer>;

  /**
   * @ignore
   */
  private toggler = stateToggler({ 'open': 'closed', 'closed':'open'});

  /**
   * @ignore
   */
  private autoCloseSub: Subscription;

  /**
   * @ignore
   */
  private toggleSubs: Subscription[] = [];

  /**
   * @ignore
   */
  hasToggleDirective = false;

  /**
   * @ignore
   */
  hasToggleLeftDirective = false;

  /**
   * @ignore
   */
  hasToggleAbDirective = false;


  constructor(
    private ccService: ContentConductorService,
    private cd: ChangeDetectorRef,
    @Optional() private cssMapper: CssMapperDirective,
    @Optional() private stateCssMapper: StateCssMapperDirective
  ) { }

  /**
   * Initialize the panel state streams.
   * @ignore
   */
  ngOnInit() { 
    this.panelState$ = this.toggle$.pipe(
      startWith('closed'),
      scan(this.toggler)
    );

    this.isOpen$ = this.panelState$.pipe(
      map(
        state=>state === 'open'
    ));
  }

  /**
   * @ignore
   */
  ngAfterContentInit() {
    if(this.toggleDirective){
      this.hasToggleDirective = true;
      this.toggleSubs.push(
        this.toggleDirective.toggleClicked
          .subscribe(_=>{this.toggle$.next()}));
    }
    if(this.toggleLeftDirective) {
      this.hasToggleLeftDirective = true;
      this.toggleSubs.push(
        this.toggleLeftDirective.toggleClicked
          .subscribe(_=>{this.toggle$.next()}));
    }
    if(this.toggleAbDirective) {
      this.hasToggleAbDirective = true;
      this.toggleSubs.push(
        this.toggleAbDirective.toggleClicked
          .subscribe(_=>{this.toggle$.next()}));
    }
  }

  /**
   * Create the conductor and all streams that 
   * handle the component functionality.
   * @ignore
   */
  ngAfterViewInit() {

    if(this.cssMapper) {
      this.cssMapper.init(this.nodes,'navbar');
    }

    if(this.stateCssMapper) {
      this.stateCssMapper.init(this.nodes,'navbar');
    }

    this.conductor = 
      this.ccService.createContentConductor(this.containers, 
        [
          this.itemsContents, 
          this.beginContents, 
          this.endContents, 
          this.itemsEndContents
        ]);
    this.conductor.init();

    this.isExpanded$ = this.mq.queryMatch.pipe(
      distinctUntilChanged(),
      startWith(this.mq.currentQueryMatch),
      tap(isMatch=>{
        if(!isMatch) {
          if(this.stateCssMapper){ this.stateCssMapper.next('collapsed'); }
          this.conductor.moveViews('fixed-left','panel-top');
          this.conductor.moveViews('fixed-right','panel-bottom');
        }
        else if(isMatch) {
          if(this.stateCssMapper){ this.stateCssMapper.next('expanded'); }
          this.conductor.moveViews('panel-top', 'fixed-left');
          this.conductor.moveViews('panel-bottom', 'fixed-right');
        }
      })
    );

    this.autoCloseSub = 
      combineLatest(
        this.isExpanded$,
        this.isOpen$,
        (ex,op)=>({
          expanded: ex,
          open: op
        })
      )
      .subscribe(({expanded,open})=>{
        if(expanded && open) {
          this.toggle$.next();
        }
      });

    /*
     * Workaround for [19449](https://github.com/angular/angular/pull/19449)
     * in case the content has router links.
     */
    this.cd.detectChanges();
    
  }

  /**
   * Clean up the component.
   * @ignore
   */
  ngOnDestroy() {
    this.conductor.destroy();

    if(this.autoCloseSub && !this.autoCloseSub.closed) {
      this.autoCloseSub.unsubscribe();
    }

    this.toggleSubs.forEach(sub=>{
      if(sub && !sub.closed) { sub.unsubscribe(); }
    });
  }
}

