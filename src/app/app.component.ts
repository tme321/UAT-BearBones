import { Component, ViewChild } from '@angular/core';
import { BBAlternatingPanelComponent, AltPanelState1Animation, AltPanelState2Animation } from 'BearBones';
import { upSlide, downSlide } from './temp.anim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: AltPanelState1Animation, useValue: upSlide }, 
    { provide: AltPanelState2Animation, useValue: downSlide }
  ]
})
export class AppComponent {
  title = '@UAT/BearBones';

  @ViewChild('altPanel') panel: BBAlternatingPanelComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    console.log(`Panel: ${this.panel}`);
    this.panel.toggle();
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
}



