import { Directive, TemplateRef } from '@angular/core';
import { ContentDirective } from '@uat/dvk';

@Directive({
  selector: '[bb-nav-item]'
})
export class NavItemDirective extends ContentDirective {
  readonly initialContainerName = 'fixed-left';

  constructor(private tRef: TemplateRef<any>) { super(tRef); }
}
