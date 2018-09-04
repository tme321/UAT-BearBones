import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[bb-nav-toggle]'
})
export class NavBarToggleDirective {
  @Output() toggleClicked = new EventEmitter<null>();
  
  constructor() { }

  @HostListener('click')
  onclick() {
    this.toggleClicked.emit();
  }
}

@Directive({
  selector: '[bb-nav-left-toggle]'
})
export class NavBarLeftToggleDirective extends NavBarToggleDirective {

  constructor() { super(); }

}

@Directive({
  selector: '[bb-nav-ab-toggle]'
})
export class NavBarAfterBrandToggleDirective extends NavBarToggleDirective {

  constructor() { super(); }

}