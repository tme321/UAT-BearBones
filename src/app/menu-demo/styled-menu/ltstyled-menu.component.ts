import { Component } from '@angular/core';
import { StyledMenuComponent } from './styled-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-ltstyled-menu',
  templateUrl: './ltstyled-menu.component.html',
  styleUrls: ['./ltstyled-menu.component.css']
})
export class LTStyledMenuComponent extends StyledMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('top');
  }
}
