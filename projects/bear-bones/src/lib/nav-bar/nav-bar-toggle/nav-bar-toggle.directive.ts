import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import { ToggleDirective } from '../../toggle';

@Directive({
  selector: '[bb-nav-toggle]'
})
export class NavBarToggleDirective extends ToggleDirective {
}

@Directive({
  selector: '[bb-nav-left-toggle]'
})
export class NavBarLeftToggleDirective extends ToggleDirective {
}

@Directive({
  selector: '[bb-nav-ab-toggle]'
})
export class NavBarAfterBrandToggleDirective extends ToggleDirective {
}