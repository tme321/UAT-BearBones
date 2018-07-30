import { Component, ElementRef } from '@angular/core';
import { BBDynamicAnimationsBase } from '../dynamic-animations/dynamic-animations.base';
import { BBDynamicAnimationsService } from '../dynamic-animations/dynamic-animations.service';

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
export class BBAlternatingPanelComponent extends BBDynamicAnimationsBase {
  constructor(
    protected elRef: ElementRef,
    protected daServ: BBDynamicAnimationsService,
  ) {
    super(elRef.nativeElement, daServ);
  }
}
