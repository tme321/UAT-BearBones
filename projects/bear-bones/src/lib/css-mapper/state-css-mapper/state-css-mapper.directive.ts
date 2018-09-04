import { Directive, ElementRef, Renderer2, Input, QueryList, OnDestroy } from '@angular/core';
import { CssMapNodeDirective } from './../css-map-node/css-map-node.directive';
import { StateCssMap, NormalizedStateCssMap } from './state-css-map/state-css-map.model';
import { NormalizedCssMap } from '../css-map/css-map.model';
import { of, merge, Subscription, combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[bb-state-css-map]'
})
export class StateCssMapperDirective implements OnDestroy {

  /**
   * @ignore
   */
  private prevState: string;

  /**
   * @ignore
   */
  private map: NormalizedStateCssMap;

  /**
   * @ignore
   */
  private stylesSub: Subscription;

  /**
   * @ignore
   */
  private state$ = new Subject<string>();

  @Input('bb-state-css-map') set stateCssMap(map:StateCssMap) {
    this.map = this.normalizeStateCssMap(map);
  }

  constructor(
    private host: ElementRef,
    private renderer: Renderer2) { }

  next(state:string) {
    this.state$.next(state);
  }

  init(nodesQl: QueryList<CssMapNodeDirective>, hostName?: string) {
    const nodes$ = merge(
      of(nodesQl.toArray()),
        nodesQl.changes.pipe(
          map((ql:QueryList<CssMapNodeDirective>) => ql.toArray())));

    this.stylesSub = 
      combineLatest(nodes$,this.state$,(nodes,state)=>({
          nodes: nodes,
          state: state
      }))
      .subscribe(({nodes, state})=>{
        nodes.forEach(node=>{
          this.removeHostCss(this.host,hostName,this.prevState);
          this.removeCss(node, this.prevState);
          this.applyHostCss(this.host,hostName,state);
          this.applyCss(node, state);
        });
        this.prevState = state;
      });  
  }

  ngOnDestroy() {
    if(this.stylesSub && !this.stylesSub.closed) {
      this.stylesSub.unsubscribe();
    }
  }

  /**
   * @ignore 
   */
  private applyHostCss(element: ElementRef, name: string, state: string) {
    if(this.map[state]) {
      const styles = this.map[state][name];
      if(styles) {
        styles.forEach(style=>{
          this.renderer.addClass(element.nativeElement,style);
        });
      }
    }
  }

  /**
   * @ignore 
   */
  private removeHostCss(element: ElementRef, name: string, state: string) {
    if(this.map[state]) {
      const styles = this.map[state][name];
      if(styles) {
        styles.forEach(style=>{
          this.renderer.removeClass(element.nativeElement,style);
        });
      }
    }
  }

  /**
   * @ignore
   */
  private applyCss(node: CssMapNodeDirective, state: string) {
    if(this.map[state]) {
      const styles = this.map[state][node.name];
      if(styles) {
        styles.forEach(style=>{
          this.renderer.addClass(node.element.nativeElement, style);
        });
      }
    }
  }

  /**
   * @ignore
   */
  private removeCss(node: CssMapNodeDirective, state: string) {
    if(this.map[state]) {
      const styles = this.map[state][node.name];
      if(styles) {
        styles.forEach(style=>{
          this.renderer.removeClass(node.element.nativeElement, style);
        });
      }
    }
  }

  /**
   * @ignore
   */
  private normalizeStateCssMap(map: StateCssMap) {
    return Object.keys(map).reduce<NormalizedStateCssMap>((nMap,state)=>{
      nMap[state] = Object.keys(map[state]).reduce<NormalizedCssMap>((entry, element)=>{
        const styles = map[state][element];
        if(Array.isArray(styles)) {
          entry[element] = styles;
        }
        else {
          entry[element] = [styles];
        }
        return entry;
      },{})
      return nMap;
    },{});
  }

}
