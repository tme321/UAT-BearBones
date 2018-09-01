import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: '[bb-toggle-c]',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  host: {
    '(click)':"onClick($event)",
    '(mouseenter)': "onMouseEnter($event)"
  },
  exportAs: 'bbToggle'
})
export class BBToggle {
  @HostBinding('class.bb-toggle') applyHostClass = true;

  @Input() set state(s:boolean) { 
    this._state = s;
    this.onToggle.next(this._state);
  }

  get state() {
    return this._state;
  }

  @Output() onToggle = new EventEmitter<boolean>();

  private _state = false;

  private wasClicked = false;

  constructor() {
    throw new Error('Not implemented');
   }

  ngOnInit() {
  }

  ngAfterViewChecked() {
  }

  onClick(e: MouseEvent) {
    this.state = !this.state;
    this.wasClicked = true;
  }

  onMouseEnter(e: MouseEvent) {
    if(!this.wasClicked) {
    }
    this.wasClicked = false
  }
}
