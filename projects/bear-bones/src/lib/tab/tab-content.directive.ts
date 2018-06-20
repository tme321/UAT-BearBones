import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { TabService } from './tab.service';

@Directive({
  selector: '[bbTabContent]'
})
export class TabContentDirective {
  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
    public tabService: TabService
  ) { }

  @Input('bbtabcontent') name: string;
  @Input('bbtabset') tabset: string;

  ngOnInit() {
      this.setVisibility();
  }

  ngDoCheck() {
      this.setVisibility();
  }

  setVisibility() {
      let display = this.tabService.tabsets[this.tabset].activeTab === this.name ? 'block' : 'none';
      this.renderer.setStyle(this.el.nativeElement, 'display', display);
}
}
