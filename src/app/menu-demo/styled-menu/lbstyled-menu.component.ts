import { Component } from '@angular/core';
import { StyledMenuComponent } from './styled-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-lbstyled-menu',
  templateUrl: './lbstyled-menu.component.html',
  styleUrls: ['./lbstyled-menu.component.css']
})
export class LBStyledMenuComponent extends StyledMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('bottom');
  }
}
