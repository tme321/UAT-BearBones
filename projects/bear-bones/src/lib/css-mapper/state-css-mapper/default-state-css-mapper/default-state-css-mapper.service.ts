import { QueryList, Renderer2 } from "@angular/core";
import { StateCssMapper } from "../state-css-mapper.model";
import { CssMapNodeDirective } from "../../css-map-node/css-map-node.directive";
import { StateCssMap, NormalizedStateCssMap } from "../state-css-map/state-css-map.model";
import { NormalizedCssMap } from "../../css-map/css-map.model";
import { of, combineLatest, Subject, merge, Subscription } from "rxjs";
import { map } from 'rxjs/operators';


export class DefaultStateCssMapper implements StateCssMapper {

  /**
   * @ignore
   */
  private prevState: string;

  /**
   * @ignore
   */
  private nMap: NormalizedStateCssMap;

  /**
   * @ignore
   */
  private stylesSub: Subscription;
  
  /**
   * @ignore
   */
  private state$ = new Subject<string>();
  
  next(state: string) {
    this.state$.next(state);
  }

  removeAll() {
    this.nodesQl.toArray().forEach(node=>{
      this.removeCss(node, this.prevState);
    });
  }

  destroy() {
    if(this.stylesSub && !this.stylesSub.closed) {
      this.stylesSub.unsubscribe();
    }
    this.renderer = null;
    this.nodesQl = null;
    this.cssMap = null;
  }

  constructor(
    private renderer: Renderer2,
    private nodesQl: QueryList<CssMapNodeDirective>,
    private cssMap: StateCssMap
  ) {
    this.nMap = this.normalizeStateCssMap(this.cssMap);
    
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
          this.removeCss(node, this.prevState);
          this.applyCss(node, state);
        });
        this.prevState = state;
      });
  }

  /**
   * @ignore
   */
  private applyCss(node: CssMapNodeDirective, state: string) {
    const styles = this.nMap[state][node.name];
    styles.forEach(style=>{
      this.renderer.addClass(node.element, style);
    });
  }

  /**
   * @ignore
   */
  private removeCss(node: CssMapNodeDirective, state: string) {
    const styles = this.nMap[state][node.name];
    styles.forEach(style=>{
      this.renderer.removeClass(node.element, style);
    });
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
