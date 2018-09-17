import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[bb-toggle]',
  exportAs: 'bbToggle'
})
export class BBToggleDirective {
  @Output() toggleClicked = new EventEmitter<null>();
  @Output() toggleEntered = new EventEmitter<null>();
  @Output() toggleLeft = new EventEmitter<null>();
 
  @HostListener('click', ['$event'])
  private onClick(e: MouseEvent) {
    e.stopPropagation();
    this.toggleClicked.emit();
  }

  @HostListener('mouseenter')
  private onMouseEnter(e: MouseEvent) {
    this.toggleEntered.emit();
  }

  @HostListener('mouseleave')
  private onMouseLeave(e: MouseEvent) {
    this.toggleLeft.emit();
  }

}
