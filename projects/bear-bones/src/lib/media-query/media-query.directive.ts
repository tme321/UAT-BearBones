import { Directive, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subscription, ReplaySubject } from 'rxjs';
import { combineLatest, flatMap } from 'rxjs/operators';

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
