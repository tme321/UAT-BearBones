import { FooComponent } from './home/foo.component';
import { Component } from '@angular/core';
import { StyleService, Styles } from './style/style.service';


/*
 * Maybe name library Chameleon since the components can look like other
 * CSS framework components?  @uat/ComponentChameleon ?
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private sServ: StyleService) {
    this.sServ.setStyle(Styles.Bulma);
  }
}



