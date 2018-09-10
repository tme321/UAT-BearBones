import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-test',
  templateUrl: './proj-test.component.html',
  styleUrls: ['./proj-test.component.css']
})
export class ProjTestComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.items.push(0);
  }
}
