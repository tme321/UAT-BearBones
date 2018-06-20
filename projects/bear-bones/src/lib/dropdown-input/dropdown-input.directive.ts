import { Directive, Input } from '@angular/core';
import { BBSlidingPanel } from '../sliding-panel/sliding-panel.component';

@Directive({
  selector: '[bb-sliding-panel-focus]',
  host: {
    '(focus)':"onFocus($event)",
    '(blur)':"onBlur($event)"
  }
})
export class BBDropdownInputDirective {
  @Input('bb-sliding-panel-focus') panel: BBSlidingPanel;
  @Input() canShow: boolean = false;

  constructor() { }

  onFocus(e: FocusEvent) {
    if(this.canShow) {
      console.log('showing');
      this.panel.show();
    }
  }

  onBlur(e: FocusEvent) {
    this.panel.hide();
  }


}
