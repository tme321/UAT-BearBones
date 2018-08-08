import { Component } from '@angular/core';
import { upSlide, downSlide } from './temp.anim';

import { BBDynamicComponentSerializer, BBDynamicComponentModel, BBDynamicComponentSerializerService } from '@uat/bear-bones';
import { NavigationLink } from './menu-items/menu-items.components';
import { NavigationLinkModel } from './menu-items/menu-items.interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '@UAT/BearBones';

  readonly navLinkName =  'nav-link';
  serializer: BBDynamicComponentSerializer;

  model$ = new Subject<NavigationLinkModel>();


  constructor(private dsService: BBDynamicComponentSerializerService) {
  }

  ngOnInit() {
    this.serializer = this.dsService.createSerializer({
      [this.navLinkName] : NavigationLink
    })
  }

  trans = {
    'open': { 'closed':  upSlide},
    'closed': { 'open':  downSlide},
  }

  state: string = 'open';
  state2: string = 'open';


  otherToggle() {
    if(this.state === 'closed') { this.state = 'open'; }
    else if(this.state === 'open') { this.state = 'closed'; }
  }

  otherToggle2() {
    if(this.state2 === 'closed') { this.state2 = 'open'; }
    else if(this.state2 === 'open') { this.state2 = 'closed'; }
  }

  stateC: string = 'open';
  cToggle() {
    if(this.stateC === 'closed') { this.stateC = 'open'; }
    else if(this.stateC === 'open') { this.stateC = 'closed'; }
  }

  clickCounter = 0;
  onNavClick = (e: MouseEvent) => {
    console.log('Nav was clicked');
    this.clickCounter++;
    this.model$.next({
      text: `Dynamic Link clicked ${this.clickCounter} times`,
      value: '/',
      queryParameters: {}
    });
  }

  model: BBDynamicComponentModel<NavigationLink> = {
    name: this.navLinkName,
    initialValues:{ 
      model: {
        text: 'Dynamic Link',
        value: '/',
        queryParameters: {},
      },
    },
    outputCallbacks: {
      onClick: this.onNavClick
    },
    inputs$: {
      model: this.model$.asObservable()
    }


  };
  
}



