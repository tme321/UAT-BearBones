import { Component } from '@angular/core';
import { StyledMenuComponent } from './styled-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-rbstyled-menu',
  templateUrl: './rbstyled-menu.component.html',
  styleUrls: ['./rbstyled-menu.component.css']
})
export class RBStyledMenuComponent extends StyledMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('bottom');
  }
}
