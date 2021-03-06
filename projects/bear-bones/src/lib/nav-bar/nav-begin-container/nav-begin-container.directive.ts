import { Directive, TemplateRef } from '@angular/core';
import { ContentDirective } from '@uat/dvk';

@Directive({
  selector: '[bb-nav-begin]'
})
export class NavBeginContainerDirective extends ContentDirective {
  readonly initialContainerName = 'menu-left';

  constructor(private tRef: TemplateRef<any>) { super(tRef); }
}
