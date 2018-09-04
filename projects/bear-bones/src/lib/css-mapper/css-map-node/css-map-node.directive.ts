import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[dvk-cm-node]'
})
export class CssMapNodeDirective {
  @Input('dvk-cm-node') name: string;

  get element() {
    return this.el;
  }

  constructor(private el: ElementRef) { }
}
