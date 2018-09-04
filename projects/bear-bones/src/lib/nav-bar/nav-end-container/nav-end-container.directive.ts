import { Directive, TemplateRef, Component, Input } from '@angular/core';
import { ContentDirective } from '@uat/dvk';

@Directive({
  selector: '[bb-nav-end]'
})
export class NavEndContainerDirective extends ContentDirective {
  readonly initialContainerName = 'fixed-right';

  constructor(private tRef: TemplateRef<any>) { super(tRef); }
}
