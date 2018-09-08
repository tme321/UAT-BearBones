import { Directive } from '@angular/core';

/**
 * FOR REMOVAL --
 * Not used, not exported, probably not necessary
 */
@Directive({
  selector: '[bb-toggle]'
})
export class BBToggleDirective {
  constructor() { console.log('toggle constructor');}
}
