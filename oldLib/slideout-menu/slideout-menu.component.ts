import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { BBSlidingPanel } from '../sliding-panel/sliding-panel.component';

@Component({
  selector: 'div[bb-slideout-menu]',
  templateUrl: './slideout-menu.component.html',
  styleUrls: ['./slideout-menu.component.css'],
  host: {
    '[class.slide-left]':"slideLeft",
    '[class.slide-right]':"!slideLeft"
  }
})
export class BBSlideoutMenu {
  @HostBinding('class.bb-slideout-menu') applyHostClass = true;

  @Input() public showOnMouseOver = true;
  @Input() public pinOnClick = true;
  @Input() public closeOnClickOutside = true;
  @Input() slideDirection: "left" | "right" = "right";

  @ViewChild('panel') panel: BBSlidingPanel;

  public get isOpen() {
    return this.panel.isShowing;
  }

  get slideLeft() {
    return this.slideDirection === "left";
  }

  constructor() { }
}
