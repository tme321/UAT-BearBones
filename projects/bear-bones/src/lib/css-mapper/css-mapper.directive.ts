import { Directive, Renderer2, Input, QueryList, OnDestroy, ElementRef } from '@angular/core';
import { BBCssMap, NormalizedCssMap } from './css-map/css-map.model';
import { normalizeStyles } from './css-map/css-map-normalizer.fn';
import { CssMapNodeDirective } from './css-map-node/css-map-node.directive';
import { of, merge, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[bb-css-map]'
})
export class CssMapperDirective implements OnDestroy {

  /**
   * Sets the mapping used to apply to the component.
   * When changed this will remove the previously defined
   * css classes and then add the specified.
   */
  @Input('bb-css-map') set cssMap(map: BBCssMap) {
    this.cleanUp();
    this.map = normalizeStyles(map);
    this.applyCss(this.nodesCache);
  }

  /**
   * @ignore
   */
  private map: NormalizedCssMap;

  /**
   * @ignore
   */
  private nodesSub: Subscription;

  /**
   * @ignore
   */
  private nodesCache: CssMapNodeDirective[];

  /**
   * @ignore
   */
  private hostName:string;

  constructor(
    private renderer: Renderer2, 
    private host: ElementRef) {
  }

  /**
   * Initialize the mapper to listen to the QueryList for element
   * changes and apply the css mappings if a [CssMap]() has already
   * been specified.
   * 
   * @param nodesQl The query list of CssMapNodeDirectives to apply 
   * styles to.
   * @param hostName The string name of the CssMap entry to apply to
   * the host element.
   */
  init(nodesQl: QueryList<CssMapNodeDirective>, hostName?: string) {
    this.hostName = hostName;
    this.nodes = nodesQl;
  }

  /**
   * @ignore
   */
  private set nodes(ql: QueryList<CssMapNodeDirective>) {

    this.nodesSub = 
      merge(
        of(ql.toArray()),
        ql.changes.pipe(
          map((nodesQL: QueryList<CssMapNodeDirective>)=>nodesQL.toArray())))
      .subscribe(nodes=>{
        this.nodesCache = nodes;
        this.applyCss(this.nodesCache);
      });
  }

  /**
   * @ignore
   */
  private cleanUp() {
    this.removeCss(this.nodesCache);

    if(this.nodesSub && !this.nodesSub.closed) {
      this.nodesSub.unsubscribe();
    }
  }

  /**
   * @ignore
   */
  private removeCss(nodes: CssMapNodeDirective[]) {
    if(this.map) {
      if(this.hostName && this.map[this.hostName]) {
        this.map[this.hostName].forEach(style=>{
          this.renderer.removeClass(
            this.host.nativeElement,
            style);
        });
      }
      if(nodes) {
        nodes.forEach(n=>{
          if(this.map && this.map[n.name]) {
            this.map[n.name].forEach(style=>{
              this.renderer.removeClass(
                n.element.nativeElement,
                style);
            });
          }
        });
      }
    }
  }

  /**
   * @ignore
   */
  private applyCss(nodes: CssMapNodeDirective[]) {
    if(this.map) {
      if(this.hostName && this.map[this.hostName]) {
        this.map[this.hostName].forEach(style=>{
          this.renderer.addClass(
            this.host.nativeElement,
            style);
        });
      }
      if(nodes) {
        nodes.forEach(n=>{
          if(this.map && this.map[n.name]) {
            this.map[n.name].forEach(style=>{
              this.renderer.addClass(
                n.element.nativeElement,
                style);
            });
          }
        });
      }
    }
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
    this.cleanUp();
  }
}
