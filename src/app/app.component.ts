import { Component, ViewChild } from '@angular/core';
import { upSlide, downSlide } from './temp.anim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '@UAT/BearBones';

  constructor() {
  }

  ngOnInit() {
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

}



