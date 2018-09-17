import { Directive } from '@angular/core';
import { BBToggleDirective } from '../../toggle';

@Directive({
  selector: '[bb-nav-toggle]'
})
export class NavBarToggleDirective extends BBToggleDirective {
}

@Directive({
  selector: '[bb-nav-left-toggle]'
})
export class NavBarLeftToggleDirective extends BBToggleDirective {
}

@Directive({
  selector: '[bb-nav-ab-toggle]'
})
export class NavBarAfterBrandToggleDirective extends BBToggleDirective {
}