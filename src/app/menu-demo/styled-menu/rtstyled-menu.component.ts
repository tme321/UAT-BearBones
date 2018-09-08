import { Component } from '@angular/core';
import { StyledMenuComponent } from './styled-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-rtstyled-menu',
  templateUrl: './rtstyled-menu.component.html',
  styleUrls: ['./rtstyled-menu.component.css']
})
export class RTStyledMenuComponent extends StyledMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('top');
  }
}
