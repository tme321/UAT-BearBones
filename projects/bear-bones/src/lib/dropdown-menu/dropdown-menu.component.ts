import {
  Component,
  Input,
  Renderer,
  ViewChild,
  ElementRef,
  ContentChildren,
  HostBinding } from '@angular/core';
import {BBMenuItem} from '../common/menu-item.directive';
import { BBSlidingPanel } from '../sliding-panel/sliding-panel.component';

@Component({
  selector: 'div[bb-dropdown-menu]',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  exportAs:'bbDropdownMenu'
})
export class BBDropdownMenu {
  @HostBinding('class.bb-dropdown-menu') applyHostClass = true;

  @Input() public showOnHover = false;
  @Input() public toggleOnClick = true;
  @Input() public closeOnClickOutside = true;

  @ViewChild('panel') panel: BBSlidingPanel;

  public get isOpen() {
    return this.panel.isShowing;
  }

  constructor() { }
}
