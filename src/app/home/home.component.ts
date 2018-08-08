import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationLink } from '../menu-items/menu-items.components';
import { DropdownInputItemChosenEvent } from '@uat/bear-bones';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
   
  }

  onSearchItemChosen(e: DropdownInputItemChosenEvent) {
    (e.component as NavigationLink).navigate();
  }

  onItemSelected(item: any){ console.log(item); }
  onItemUnselected(item: any){ console.log(item); }


}
