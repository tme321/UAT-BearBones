import { Component, ElementRef } from '@angular/core';

/**
 * 
 */
@Component({
  selector: '[bb-alt-panel]',
  templateUrl: './alternating-panel.component.html',
  styleUrls: ['./alternating-panel.component.css'],
  animations: [],
  exportAs: 'bbAltPanel',
})
export class BBAlternatingPanelComponent  {
  constructor(
    protected elRef: ElementRef,
  ) {
    //super(elRef.nativeElement, daServ);
  }
}
