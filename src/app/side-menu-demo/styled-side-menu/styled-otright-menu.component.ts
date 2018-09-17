import { Component } from '@angular/core';
import { StyledSideMenuComponent } from './styled-side-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-styled-otright-menu',
  templateUrl: './styled-otright-menu.component.html',
  styleUrls: ['./styled-side-menu.component.css']
})
export class StyledOTRightMenuComponent extends StyledSideMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('right');
  }
}
