import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[bb-toggle]'
})
export class ToggleDirective {
  @Output() toggleClicked = new EventEmitter<null>();
 
  @HostListener('click')
  onclick() {
    this.toggleClicked.emit();
  }
}
