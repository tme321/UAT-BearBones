import { Component, OnInit, AfterViewInit, ViewChildren, ContentChildren, QueryList, TemplateRef, ViewChild, Input, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { fromEvent, Observable, Subject } from 'rxjs';
import { ContentConductorService, ContentContainerDirective, ContentDirective, ContentConductor, ContentContainer, Content } from '@uat/dvk';
import { MediaQueryDirective } from '../media-query/media-query.directive';
import { distinctUntilChanged, map, scan, startWith, tap } from 'rxjs/operators';
import { stateToggler } from '../common/state-toggler.fn';
import { NavItemDirective } from './nav-item/nav-item.directive';
import { NavItemRightDirective } from './nav-item-right/nav-item-right.directive';

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
export class NavBarComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Resolve the media query
   * @ignore
   */
  @ViewChild(MediaQueryDirective) mq: MediaQueryDirective; 

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
  leftContents: QueryList<Content>;

    /**
   * Resolve the right/bottom content.
   * @ignore
   */
  @ContentChildren(NavItemRightDirective,{ descendants: true }) 
  rightContents: QueryList<Content>;

  /**
   * The animations to apply to the panel as it transitions between the
   * `'open'` and `'closed'` states.
   */
  @Input() panelAnimations: (AnimationTransitionMetadata | AnimationStateMetadata)[] = [];

  /**
   * A string as a media query.  When this media query is 
   * evaluted as true the panel will be in the expanded state 
   * where the menu items are displayed inside the bar.
   * 
   * When it is false the items will be put inside a panel 
   * that opens and closes controlled by the toggle.
   * 
   * @default "(min-width : 844px)"
   */
  @Input() expandOnQuery: string = "(min-width : 844px)";

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

  constructor(
    private ccService: ContentConductorService,
    private cd: ChangeDetectorRef
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
   * Create the conductor and all streams that 
   * handle the component functionality.
   * @ignore
   */
  ngAfterViewInit() {
    this.conductor = 
      this.ccService.createContentConductor(this.containers, 
        [this.leftContents, this.rightContents]);
    this.conductor.init();

    this.isExpanded$ = this.mq.queryMatch.pipe(
      distinctUntilChanged(),
      startWith(this.mq.currentQueryMatch),
      tap(isMatch=>{
        if(!isMatch) {
          this.conductor.moveViews('fixed-left','panel-top');
          this.conductor.moveViews('fixed-right','panel-bottom');
        }
        else if(isMatch) {
          this.conductor.moveViews('panel-top', 'fixed-left');
          this.conductor.moveViews('panel-bottom', 'fixed-right');
        }
      })
    );

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
  }
}

