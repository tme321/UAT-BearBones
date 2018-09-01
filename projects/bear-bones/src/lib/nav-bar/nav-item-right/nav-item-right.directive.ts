import { Directive, TemplateRef } from '@angular/core';
import { ContentDirective } from '@uat/dvk';

@Directive({
  selector: '[bb-nav-item-right]'
})
export class NavItemRightDirective extends ContentDirective {
  readonly initialContainerName = 'fixed-right';

  constructor(private tRef: TemplateRef<any>) { super(tRef); }
}
