import { Component, OnInit, AfterViewInit, ViewChildren, ContentChildren, QueryList, ViewChild, Input, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy, Optional, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { Observable, Subject, combineLatest, fromEvent, Subscription } from 'rxjs';
import { ContentConductorService, ContentContainerDirective, ContentConductor, ContentContainer, Content, StateCSSMap } from '@uat/dvk';
import { MediaQueryDirective } from '../media-query/media-query.directive';
import { distinctUntilChanged, map, scan, startWith, tap } from 'rxjs/operators';
import { stateToggler } from '../common';
import { NavItemDirective } from './nav-item/nav-item.directive';
import { NavItemEndDirective } from './nav-item-end/nav-item-end.directive';
import { CssMapperDirective, StateCssMapperDirective, CssMapNodeDirective } from '../css-mapper';
import { NavBeginContainerDirective } from './nav-begin-container/nav-begin-container.directive';
import { NavEndContainerDirective } from './nav-end-container/nav-end-container.directive';

import { NavBarToggleDirective, NavBarLeftToggleDirective, NavBarAfterBrandToggleDirective } from './nav-bar-toggle/nav-bar-toggle.directive';

/**
 * A responsive horizontal container that can hold arbitrary content.
 * 
 * ## **Selector**
 * 
 * The NavBarComponent can be attached to a `<div>`, `<nav>`, or `<menu>` 
 * element with the `bb-nav-bar` selector.
 * 
 * ## **Responsive States**
 * 
 * The NavBar has 2 states that it toggles between.  The 'expanded' state 
 * and the 'collapsed' state.  The state is determined by a media query 
 * specified by the `expandOnQuery` `@Input` and is evaluated when the `expandEvent$` 
 * Observable `@Input` is triggered.  See {@link MediaQueryDirective} for more 
 * information.
 * 
 * ## **Layout**
 * 
 * The NavBar is broken up into 9 layout containers.  
 * 
 * The host element contains the main `<div>` menu element.  This element
 * contains 6 of the layout containers.  When the NavBar is expanded all of
 * the content is contained inside this menu element.
 * 
 * The menu element has a container for the static brand content which is 
 * displayed regardless of the state of the NavBar.
 * 
 * The menu has 2 containers for content when it is expanded.  The two 
 * containers represent the left and right justified, following the brand, 
 * content when in the `expanded` state and the top and bottom justified
 * content when in the `collapsed` state.  The contents of these containers is
 * specified with two structural directives `*bb-nav-begin` and `*bb-nav-end`.
 * 
 * The menu bar also contains 3 different locations for a toggle.  The toggle 
 * only exists when the NavBar is in the `collapsed` state.  The 3 locations are
 * specified with 3 different directives: `bb-nav-toggle`, `bb-nav-left-toggle`, 
 * and `bb-nav-ab-toggle`. The `bb-nav-toggle` toggle represents the standard 
 * right justified position for a toggle when `collapsed`. The `bb-nav-left-toggle` toggle inserts
 * the toggle left justified before the brand when `collapsed`.  And the 
 * `bb-nav-toggle` toggle puts the toggle immediately after the brand when 
 * the Navbar is `collapsed`.
 * 
 * When the NavBar is `collapsed` the toggle controls an animated dropdown that
 * displays the `*bb-nav-begin` specified content on top and the `*bb-nav-end`
 * on the bottom.
 * 
 * ## **Dropdown Animations**
 * 
 * The dropdown animations are specified with a `dropdownAnimations` `@Input` and
 * the `animationsCssMap` `@Input`.  The animated dropdown has 2 states: `open` 
 * and `closed`.  See the [@uat/dvk Dynamic Animations]{@link https://tme321.github.io/UAT-DynamicViewKit/additional-documentation/dynamic-animations.html} 
 * documentation for more information.
 * 
 * ## **Custom Styling**
 * 
 * The NavBarComponent also supports [CSS Mappings]{@link https://tme321.github.io/UAT-DynamicViewKit/additional-documentation/css-mapper.html}
 * and [State CSS Mappings]{@link https://tme321.github.io/UAT-DynamicViewKit/additional-documentation/state-css-mapper.html}
 * with the elements targetable with these strings:
 * 
 * host element: `navbar`
 * menu element: `menu`
 * all toggle containers: `toggle`
 * brand container: `brand`
 * left justified menu content container: `items-left`
 * right justified menu content container: `items-right`
 * top justified menu content container: `items-top`
 * bottom justified menu content container: `items-bottom`
 * dropdown container: `dropdown`
 * 
 * And the valid states as `expanded` and `collapsed`.
 * 
 * ## **Example**
 * 
 * ###### **Note**
 * This example includes specifying every possible option.
 * Most use cases will not require using all of the features 
 * available.
 * 
 * ```html
 *  <nav bb-nav-bar
 *  	#navBar="bbNavBar"
 *  	expandOnQuery="(min-width : 1088px)"
 *    [expandEvent$]="fromEvent(window,'resize')"
 *  	[bb-css-map]="{ 'navbar': 'nav' }"
 *    [bb-state-css-map]="{
 *          'expanded': {
 *            'menu': 'is-expanded',
 *          },
 *          'collapsed': { 
 *            'menu': 'is-collapsed'
 *          }
 *    }"
 *  	[dropdownAnimations]="[
 *      transition('open<=>closed',animate('150ms')),
 *      state('open',style({
 *        'transform-origin': 'top',
 *        'transform': 'scaleY(1.0)'
 *      })),
 *      state('closed',style({
 *        'transform-origin': 'top',
 *        'transform': 'scaleY(0.0)'
 *      })),
 *      state('void',style({
 *        'transform-origin': 'top',
 *        'transform': 'scaleY(0.0)'
 *      }))
 *    ]" 
 *    [animationsCssMap]= "{ 'open': 'is-open', 'closed': 'is-closed' }">
 *  
 *  	<span bb-brand >NavBar Brand</span>
 *  	
 *  	<div *bb-nav-begin>
 *  		<a routerLink="/someUrl">A Link</a>
 *  		<app-component></app-component>
 *  	</div>
 *  	<div *bb-nav-end>
 *  		<a routerLink="/login">Login Thing 2</a>
 *  	</div>
 *  
 *  	<div bb-nav-toggle>
 *  		<span>Toggle</span>
 *  	</div>
 *  
 *  </nav>
 * ```
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
   * The animations to apply to the dropdown as it transitions between the
   * `'open'` and `'closed'` states.
   */
  @Input() dropdownAnimations: (AnimationTransitionMetadata | AnimationStateMetadata)[] = [];

  /**
   * The map of css classes that will be added and removed as
   * the animation plays. 
   */
  @Input() animationsCssMap: StateCSSMap = {};

  /**
   * A string as a media query.  When this media query is 
   * evaluted as true the NavBar will be in the `expanded` state 
   * where the menu items are displayed inside the bar.
   * 
   * When it is false the NavBar will be in the `collapsed` state 
   * where the items will be put inside a dropdown that opens and 
   * closes controlled by the toggle.
   * 
   * See {@link {@link MediaQueryDirective} for more information. 
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
   * A stream of the state of the dropdown.
   * This can be combined with the `exportAs` value `'bbNavBar'`
   * or a `ViewChild` in order to determinet the state of the 
   * dropdown from outside the component.
   */
  isOpen$: Observable<boolean>;

  /**
   * A stream of the media query results.
   * This can be combined with the `exportAs` value `'bbNavBar'`
   * or a `ViewChild` to determine if the navbar is currently 
   * expanded or collapsed from outside the component.
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
  dropdownState$: Observable<string>;

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
   * Initialize the dropdown state streams.
   * @ignore
   */
  ngOnInit() { 
    this.dropdownState$ = this.toggle$.pipe(
      startWith('closed'),
      scan(this.toggler)
    );

    this.isOpen$ = this.dropdownState$.pipe(
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
          this.conductor.moveViews('menu-left','dropdown-top');
          this.conductor.moveViews('menu-right','dropdown-bottom');
        }
        else if(isMatch) {
          if(this.stateCssMapper){ this.stateCssMapper.next('expanded'); }
          this.conductor.moveViews('dropdown-top', 'menu-left');
          this.conductor.moveViews('dropdown-bottom', 'menu-right');
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
