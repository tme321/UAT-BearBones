import { Component, OnInit } from '@angular/core';
import { StyleService } from '../../style/style.service';
import { StyledSideMenuComponent } from './styled-side-menu.component';

@Component({
  selector: 'app-styled-topright',
  templateUrl: './styled-topright.component.html',
  styleUrls: ['./styled-side-menu.component.css']
})
export class StyledTOPRightComponent extends StyledSideMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('right');
  }
}
