import { Component } from '@angular/core';
import { StyleService } from '../../style/style.service';
import { StyledSideMenuComponent } from './styled-side-menu.component';

@Component({
  selector: 'app-styled-otleft-menu',
  templateUrl: './styled-otleft-menu.component.html',
  styleUrls: ['./styled-side-menu.component.css']
})
export class StyledOTLeftMenuComponent extends StyledSideMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('left');
  }
}
