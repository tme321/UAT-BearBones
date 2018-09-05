import { Directive, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subscription, ReplaySubject } from 'rxjs';
import { combineLatest, flatMap } from 'rxjs/operators';

/**
 * A directive that handles a media query as a custom event.
 * 
 * The media query is a string in the format specified by the {@link Window.matchMedia}(https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
 * DOM Api.
 * 
 * The media query string will be evaluated when the directive's
 * ngOnInit lifecycle method executes and again each time the 
 * Observable `event$` stream emits.
 * 
 * The result is available through the `@Output` `queryMatch` as a
 * boolean. 
 */
@Directive({
  selector: '[bb-mq]'
})
export class MediaQueryDirective implements OnInit {
  private eventSub: Subscription;
  private query$ = new ReplaySubject<string>(1);
  private event$ = new ReplaySubject<Observable<Event>>(1);

  @Input('event$') set event(e: Observable<Event>) {
    this.event$.next(e);
  }

  @Input('bb-mq') set query(q: string) {
    this.query$.next(q);
  }

  @Output() queryMatch = new EventEmitter<boolean>();

  private lastQueryMatch: boolean;

  get currentQueryMatch() {
    return this.lastQueryMatch;
  }

  constructor() { }

  ngOnInit() {
    this.startSubscription();
  }

  ngOnDestroy() {
    this.closeSubscription();
  }

  private startSubscription() {

    /*
     * Get initial state of query
     */
    this.query$.subscribe(q=>{
      this.lastQueryMatch = window.matchMedia(q).matches;
      this.queryMatch.emit(this.lastQueryMatch)
    })
    .unsubscribe();
    

    this.eventSub = 
      this.event$.pipe(
        flatMap(e=>e),
        combineLatest(this.query$,(e,q)=>
          window.matchMedia(q).matches
        )
      )
      .subscribe(result=>{
        this.lastQueryMatch = result;
        this.queryMatch.emit(this.lastQueryMatch);
      });
  }

  private closeSubscription() {
    if(this.eventSub && !this.eventSub.closed) {
      this.eventSub.unsubscribe();
    }
  }
}
