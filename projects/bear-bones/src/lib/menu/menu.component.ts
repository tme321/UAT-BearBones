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
  ChangeDetectorRef} from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { Observable, Subject, fromEvent, merge, of } from 'rxjs';
import { startWith, scan, tap, takeWhile, map, debounce, distinctUntilChanged, debounceTime, skipWhile, mapTo, switchMap, switchAll } from 'rxjs/operators';
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

  @ViewChild('panel',{read: ElementRef}) panel: ElementRef;

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
   * Doesn't quite work at the moment.  Maybe 
   * removed in the future anyway?
   *@ignore
   * `@Input()` 
   */
   private closeOnClickOutside = false;

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
  panelState$ = new Observable<string>();

  private panelSub = new Subject<string>();

  constructor(   
    private cd: ChangeDetectorRef,
    @Optional() private cssMapper: CssMapperDirective,
    @Optional() private stateCssMapper: StateCssMapperDirective
    ) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.panelState$ = this.panelSub.asObservable();
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


    let onHover$ = merge(
      fromEvent(this.panel.nativeElement,'mouseenter'),
      this.toggle.toggleEntered)
      .pipe(
        takeWhile(()=>this.showOnHover),
        mapTo('open')
      );

    let onLeave$ = merge(
      fromEvent(this.panel.nativeElement,'mouseleave'),
      this.toggle.toggleLeft)
      .pipe(
        takeWhile(()=>this.showOnHover),
        mapTo('closed')
      );

    let hoverState$ = merge(
      onHover$,
      onLeave$)
    .pipe(
      debounceTime(150),
      distinctUntilChanged()
    );

    let onClickOutside$ = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        takeWhile(()=>this.closeOnClickOutside),
        mapTo('closed'),
        tap(x=>{
          console.log('outside!');
        })
    );

          
    let onClick$ = this.toggle.toggleClicked.pipe(
      takeWhile(()=>this.toggleOnClick),
      startWith('closed'),
      scan(this.toggler),
    );

    merge(onClickOutside$, onClick$).pipe(
      distinctUntilChanged(),
      switchMap((state)=>{
        console.log('swtichmap click',state);
        if(state === 'closed') {
          console.log('mapping to hover',state);
          return merge(of(state),hoverState$);
        }
        else {
          console.log('mapping to click',state);
          return of(state);
        }    
      })
    ).subscribe(state=>{
      console.log('after swtichmap',state);
      this.panelSub.next(state);
    });


    this.cd.detectChanges();
  }

}
