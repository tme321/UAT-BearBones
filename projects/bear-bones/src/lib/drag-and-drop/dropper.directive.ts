import { Directive, ElementRef, Renderer2, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DragAndDropService } from './drag-and-drop.service';

@Directive({
  selector: '[bbDropper]'
})
export class DropperDirective {
  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
    public dndService: DragAndDropService
  ) {
      el.nativeElement.draggable = true;
      el.nativeElement.dragstart = this.dragstart;
      el.nativeElement.dragend = this.dragend;
  }

  ngOnInit() {
      if (this.bbdropperClass) {
          this.renderer.addClass(this.el.nativeElement, this.bbdropperClass);
      }
  }

  @Input('bbdropper') name: string;
  @Input('bbdropperClass') bbdropperClass: string;
  @Input('bbholdingClass') bbholdingClass: string;
  @Input('bbpayload') bbpayload:string;
  @Input('bbdropperId') bbdropperId: string;
  @Output() bbstart = new EventEmitter();
  @Output() bbend = new EventEmitter();

  @HostListener('dragstart', ['$event']) dragstart(event:any) {
      if (this.bbholdingClass !== undefined) {
          this.renderer.addClass(this.el.nativeElement, this.bbholdingClass);
      }
      event.dataTransfer.setData('text/plain', this.bbpayload || null);
      this.dndService.el = this.el;
      if(this.bbdropperId) {
          this.bbstart.emit(this.bbdropperId);
      }
  }

  @HostListener('dragend') dragend() {
      if (this.bbholdingClass !== undefined) {
          this.renderer.removeClass(this.el.nativeElement, this.bbholdingClass);
      }
      if(this.bbdropperId) {
          this.bbstart.emit(this.bbdropperId);
      }
  }
}
