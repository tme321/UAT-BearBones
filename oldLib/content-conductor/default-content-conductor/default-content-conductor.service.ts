import { QueryList, TemplateRef, ViewRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BBContentConductor } from '../content-conductor.model';
import { BBContentContainer } from '../content-container/content-container.model';
import { BBContainersMap } from '../containers-map/containers-map.model';

/**
 * The default implementation of a {@link BBContentConductor}.
 * This version can be overriden by providing a different class
 * for the {@link BBContentConductorConstructorToken} token.
 */
export class BBDefaultContentConductorService<T extends BBContentContainer> implements BBContentConductor<T> {

  constructor(
    private containersQueryList: QueryList<T>,
    private contentsQueryList : QueryList<TemplateRef<any>>
  ) {}
    
  private containers: T[];
  private templates: TemplateRef<any>[];
  private containersMap: BBContainersMap = {};
  private containersSub: Subscription;
  private contentsSub: Subscription;

  private mapContainers<T extends BBContentContainer>(
    containers: T[]) {
      return containers.reduce((map,container)=>{
        map[container.containerName] = container.viewContainer;
        return map;
      },{});
  }
  
  init(initialContainer: string) {
    this.containers = this.containersQueryList.toArray();
    this.templates = this.contentsQueryList.toArray();

    this.containersMap = this.mapContainers(this.containers);
    this.containersSub = this.containersQueryList
      .changes
      .subscribe((c: T[])=>{
        this.containers = c;
        this.mapContainers(this.containers);
      });

    this.contentsSub = this.contentsQueryList
      .changes
      .subscribe((t: TemplateRef<any>[])=>{
        this.templates = t;
      });

    if(initialContainer && this.templates) {
      this.templates.map(template=>
        this.containersMap[initialContainer]
          .createEmbeddedView(template));
    }
  }

  destroy() {
    if(this.containersSub && !this.containersSub.closed) { 
      this.containersSub.unsubscribe(); 
    }

    if(this.contentsSub && !this.contentsSub.closed) {
      this.contentsSub.unsubscribe();
    }

    this.containersQueryList = null;
    this.contentsQueryList = null;
    this.containers = null;
    this.templates = null;
    this.containersMap = null;
    this.containersSub = null;
    this.contentsSub = null;
  }

  moveView( 
    previousContainer: string,
    nextContainer:string, 
    index: number ) {
      index = index || this.containersMap[previousContainer].length;
      const view = this.containersMap[previousContainer].detach(index);
      this.containersMap[nextContainer].insert(view);
  }

  detachView(
    container:string,
    index?: number) {
      return this.containersMap[container].detach(index);
  }

  moveViews(previousContainer: string, nextContainer: string) {
    const length = this.containersMap[previousContainer].length;
    const viewsCache: ViewRef[] = [];
    for(let i=0; i<length; i++) {
      viewsCache.push(
        this.containersMap[previousContainer].detach(0));
    }
    
    viewsCache.forEach(view=>{
      this.containersMap[nextContainer].insert(
        view,
        this.containersMap[nextContainer].length);
    });
  }

  detachViews(container: string) {
    const detachedViews = [];
    const length = this.containersMap[container].length;

    for(let x = 0; x < length; x++) {
      detachedViews.push(this.containersMap[container].detach(x));
    }

    return detachedViews;
  }

  attachViews(container:string, views: ViewRef[]) {
    views.forEach(view=>
      this.containersMap[container].insert(view));
  }

  attachView(container: string, view: ViewRef) {
    this.containersMap[container].insert(view);
  }
}
