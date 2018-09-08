import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style/style.service';
import { BBCssMap, StateCssMap } from '@uat/bear-bones';
import { transition, animate, state, style } from '@angular/animations';

@Component({
  selector: 'app-nav-bar-demo',
  templateUrl: './nav-bar-demo.component.html',
  styleUrls: ['./nav-bar-demo.component.css']
})
export class NavBarDemoComponent implements OnInit {
  constructor(private sServ: StyleService) { }

  isBulma = ()=> this.sServ.isBulma();
  isBootstrap = ()=> this.sServ.isBootstrap();
  isFoundation = ()=> this.sServ.isFoundation();

  ngOnInit() {
  }

  bulmaNavbarCssMap: BBCssMap = {
		'navbar': ['navbar','is-fixed-top'],
		'menu': ['navbar-menu', 'has-background-grey-dark'],
    'brand': 'navbar-brand',
    'dropdown': ['has-background-grey-dark'],
  };
  
  bootstrapNavbarCssMap: BBCssMap = {
		'menu': ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'],
    'brand': 'navbar-brand',
		'dropdown': ['collapse', 'navbar-collapse', 'show', 'bg-dark', 'inherit-padding'],
	};

  foundationNavbarCssMap: BBCssMap = {
    'brand': 'menu-text',
    'dropdown': ['top-bar', 'inherit-padding'],
    'items-top':'top-bar-left',
    'items-bottom':'top-bar-left',
  };
  
  foundationNavbarStateCssMap: StateCssMap = {
    'expanded': {
      'menu': 'top-bar',
    },
    'collapsed': { 
      'menu': 'title-bar'
    }
  };

  navBarAnimations = [
    transition('open<=>closed',animate('150ms')),
    state('open',style({
      'transform-origin': 'top',
      'transform': 'scaleY(1.0)'
    })),
    state('closed',style({
      'transform-origin': 'top',
      'transform': 'scaleY(0.0)'
    })),
    state('void',style({
      'transform-origin': 'top',
      'transform': 'scaleY(0.0)'
    }))
  ];
}
