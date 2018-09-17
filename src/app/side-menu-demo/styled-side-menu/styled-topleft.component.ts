import { Component } from '@angular/core';
import { StyleService } from '../../style/style.service';
import { StyledSideMenuComponent } from './styled-side-menu.component';

@Component({
  selector: 'app-styled-topleft',
  templateUrl: './styled-topleft.component.html',
  styleUrls: ['./styled-side-menu.component.css']
})
export class StyledTOPLeftComponent extends StyledSideMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('right');
  }
}
