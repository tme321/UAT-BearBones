import { Component } from '@angular/core';
import { StyledMenuComponent } from './styled-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-mbstyled-menu',
  templateUrl: './mbstyled-menu.component.html',
  styleUrls: ['./mbstyled-menu.component.css']
})
export class MBStyledMenuComponent extends StyledMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('bottom');
  }
}
