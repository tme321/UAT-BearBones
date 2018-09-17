import { Component } from '@angular/core';
import { StyledSideMenuComponent } from './styled-side-menu.component';
import { StyleService } from '../../style/style.service';
import { BBCssMap } from '@uat/bear-bones';

@Component({
  selector: 'app-styled-left-menu',
  templateUrl: './styled-left-menu.component.html',
  styleUrls: ['./styled-side-menu.component.css']
})
export class StyledLeftMenuComponent extends StyledSideMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('left');
  }
}
