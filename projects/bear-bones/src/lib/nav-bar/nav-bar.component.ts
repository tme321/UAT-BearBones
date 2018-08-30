import { Component, OnInit, AfterViewInit, ViewChildren, ContentChildren, QueryList, TemplateRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { fromEvent } from 'rxjs';
import { ContentConductorService, ContentContainerDirective, ContentDirective, ContentConductor, ContentContainer } from '@uat/dvk';
import { MediaQueryDirective } from '../media-query/media-query.directive';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'div[bb-nav-bar] | nav[bb-nav-bar]',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild(MediaQueryDirective) mq: MediaQueryDirective; 

  @ViewChildren(ContentContainerDirective)
  containers: QueryList<ContentContainerDirective>;

  @ContentChildren(ContentDirective,{ read: TemplateRef, descendants: true }) 
  contents: QueryList<TemplateRef<any>>;

  private conductor: ContentConductor<ContentContainer>;

  panelState: 'closed' | 'open' = 'closed';

  @Input() panelAnimations: (AnimationTransitionMetadata | AnimationStateMetadata)[] = [];

  @Input() expandOnQuery: string = "(min-width : 844px)";

  windowResize$ = fromEvent(window,"resize");

  isMatch: boolean;

  constructor(
    private ccService: ContentConductorService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.conductor = 
      this.ccService.createContentConductor(this.containers, this.contents);
    this.conductor.init('fixed-left');

    this.onExpandQuery(this.mq.currentQueryMatch);

    this.mq.queryMatch.pipe(
      distinctUntilChanged()
    ).subscribe(isMatch=>this.onExpandQuery(isMatch));

    /*
     * Workaround for [19449](https://github.com/angular/angular/pull/19449)
     * in case the content has router links.
     */
    this.cd.detectChanges();
    
  }

  onExpandQuery(isMatch: boolean) {
    if(this.conductor && this.isMatch != isMatch) {
      if(!isMatch) {
        this.conductor.moveViews('fixed-left','panel-top');
        this.conductor.moveViews('fixed-right','panel-bottom');
        this.isMatch = isMatch
      }
      else if(isMatch) {
        this.conductor.moveViews('panel-top', 'fixed-left');
        this.conductor.moveViews('panel-bottom', 'fixed-right');
        this.isMatch = isMatch
      }
    }
  }

  onToggle() {
    if(this.panelState === 'open') {
      this.panelState = 'closed';
    }
    else {
      this.panelState = 'open';
    }
  }

}
