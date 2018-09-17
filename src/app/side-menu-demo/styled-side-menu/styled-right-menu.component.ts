import { Component } from '@angular/core';
import { StyledSideMenuComponent } from './styled-side-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-styled-right-menu',
  templateUrl: './styled-right-menu.component.html',
  styleUrls: ['./styled-side-menu.component.css']
})
export class StyledRightMenuComponent extends StyledSideMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('right');
    console.log(this.menuAnimations);
  }
}
