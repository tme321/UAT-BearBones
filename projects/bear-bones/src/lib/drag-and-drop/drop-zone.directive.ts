import { Directive, ElementRef, Renderer2, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { DragAndDropService } from './drag-and-drop.service';

@Directive({
  selector: '[bbDropZone]'
})
export class DropZoneDirective {
  constructor(
    public el: ElementRef,
    public dndService: DragAndDropService,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
      if (this.bbdropzoneClass !== undefined) {
          this.renderer.addClass(this.el.nativeElement, this.bbdropzoneHoverClass);
      }
      if (!this.dndService.dropzones.includes(this.name)) {
          this.dndService.dropzones.push(this.name);
      }
  }

  @Input('bbdropzone') name: string;

  @Input('bbdropzoneClass') bbdropzoneClass: string;
  @Input('bbdropzoneHoverClass') bbdropzoneHoverClass: string;
  @Input('bbdropzoneId') bbdropzoneId: string;
  @Output() bbdata = new EventEmitter();
  @Output() bbenter = new EventEmitter();
  @Output() bbleave = new EventEmitter();
  @Output() bbdrop = new EventEmitter();

  @HostListener('dragover', ['$event']) dragover(event) {
      event.preventDefault();
  }

  @HostListener('dragenter') dragenter() {
      if (this.bbdropzoneHoverClass) {
          this.renderer.addClass(this.el.nativeElement, this.bbdropzoneHoverClass);
      }
      if (this.bbdropzoneId) {
          this.bbenter.emit(this.bbdropzoneId);
      }
  }

  @HostListener('dragleave') dragleave() {
      if (this.bbdropzoneHoverClass) {
          this.renderer.removeClass(this.el.nativeElement, this.bbdropzoneHoverClass);
      }
      if (this.bbdropzoneId) {
          this.bbleave.emit(this.bbdropzoneId);
      }
  }

  @HostListener('drop', ['$event']) drop(event) {
      event.preventDefault();
      this.renderer.removeClass(this.el.nativeElement, this.bbdropzoneHoverClass);

      let dropped = this.dndService.el.nativeElement;
      if (dropped.attributes.bbdropper.value === this.name) {
          this.renderer.removeChild(this.dndService.el.nativeElement.parentNode, this.dndService.el.nativeElement);
          this.renderer.appendChild(this.el.nativeElement, this.dndService.el.nativeElement);
          if (dropped.attributes.bbpayload) {
              this.bbdata.emit(dropped.attributes.bbpayload.value);
          }
      }
      if (this.bbdropzoneId) {
          this.bbdrop.emit(this.bbdropzoneId);
      }
  }
}
