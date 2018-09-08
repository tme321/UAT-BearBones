import { Component } from '@angular/core';
import { StyledMenuComponent } from './styled-menu.component';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-mtstyled-menu',
  templateUrl: './mtstyled-menu.component.html',
  styleUrls: ['./mtstyled-menu.component.css']
})
export class MTStyledMenuComponent extends StyledMenuComponent {
  constructor(protected sServ: StyleService) {
    super(sServ);
    this.menuAnimations = this.makeMenuAnimations('top');
  }
}
