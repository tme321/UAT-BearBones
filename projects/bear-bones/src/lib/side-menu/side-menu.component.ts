import { Component, Input, AfterViewInit, OnDestroy, ContentChild, ViewChildren, ViewChild, ElementRef, QueryList, ChangeDetectorRef, Optional } from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { takeWhile, mapTo, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription, Observable, merge, fromEvent } from 'rxjs';
import { StateCSSMap } from '@uat/dvk';
import { BBToggleDirective, BBToggleService, Toggle, BBToggleActions, SetToggle } from '../toggle/index';
import { CssMapNodeDirective, CssMapperDirective, StateCssMapperDirective } from '../css-mapper/index';
import { BBDocumentEventsSourceService, BBToggleStates, PanelLeftDirective, PanelRightDirective, ToggleAfterPanelDirective, ToggleBeforePanelDirective } from '../common/index';

/**
 * A menu panel that is attached to the side of the container.
 */
@Component({
  selector: '[bb-side-menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class BBSideMenuComponent implements AfterViewInit, OnDestroy {

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

  //@ContentChild(PanelLeftDirective) left: PanelLeftDirective;
  //@ContentChild(PanelRightDirective) right: PanelRightDirective;

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
   * Optionally assign a toggle from outside this menu to control
   * the toggling behavior.
   */
  @Input('toggle') outsideToggle: BBToggleDirective;


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
    @Optional() public left: PanelLeftDirective,
    @Optional() public right: PanelRightDirective,
    //@Optional() public before: ToggleBeforePanelDirective,
    //@Optional() public after: ToggleAfterPanelDirective
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

  createSetterStreams(outsideClick$: Observable<MouseEvent>) {
    const open$ = this.openSub.pipe(
      mapTo(new SetToggle(BBToggleStates.OPEN)));

    const close$ = this.closeSub.pipe(
      mapTo(new SetToggle(BBToggleStates.CLOSED)));
  
    const clickOutside$ = outsideClick$
      .pipe(
        takeWhile(()=>this.closeOnClickOutside),
        mapTo(new SetToggle(BBToggleStates.CLOSED)));

    return [open$,close$,clickOutside$];
  }

  createClickStream(toggle: BBToggleDirective) {
    const click$ = toggle.toggleClicked
      .pipe(
        takeWhile(()=>this.toggleOnClick),
        mapTo(new Toggle()));

    return click$;
  }

  createHoverStream(toggle: BBToggleDirective, panelElement: any) {
    const onHover$ = merge(
      fromEvent(panelElement,'mouseenter'),
      toggle.toggleEntered)
      .pipe(
        takeWhile(()=>this.showOnHover),
        mapTo(BBToggleStates.OPEN));

    const onLeave$ = merge(
      fromEvent(panelElement,'mouseleave'),
      toggle.toggleLeft)
      .pipe(
        takeWhile(()=>this.showOnHover),
        mapTo(BBToggleStates.CLOSED));

    const hoverState$ = merge(
      onHover$,
      onLeave$)
      .pipe(
        debounceTime(150),
        distinctUntilChanged());

    return hoverState$;
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

    const setterStreams = this.createSetterStreams(this.deServ.click$);

    const conditionalSources = {};

    if(this.toggle) {
      const click$ = this.createClickStream(this.toggle);
      this.toggleSources.push(click$); 

      const hover$ = this.createHoverStream(
        this.toggle,
        this.panel.nativeElement);
      conditionalSources[BBToggleStates.CLOSED]= hover$;
    }

    if(this.outsideToggle) {
      const click$ = this.createClickStream(this.outsideToggle);
      this.toggleSources.push(click$); 

      const hover$ = this.createHoverStream(
        this.outsideToggle,
        this.panel.nativeElement);
      conditionalSources[BBToggleStates.CLOSED]= hover$;
    }

    this.toggleSources.push(...setterStreams);

    this.togglerSub = this.tSer.createStateToggle$({
        [BBToggleStates.OPEN]: BBToggleStates.CLOSED,
        [BBToggleStates.CLOSED]: BBToggleStates.OPEN
      },
      BBToggleStates.CLOSED,
      this.toggleSources,
      conditionalSources)
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
