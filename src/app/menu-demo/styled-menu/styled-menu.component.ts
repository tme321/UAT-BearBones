import { Component, OnInit } from '@angular/core';
import { transition, animate, state, style, AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { BBCssMap } from '@uat/bear-bones';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-styled-menu',
  templateUrl: './styled-menu.component.html',
  styleUrls: ['./styled-menu.component.css']
})
export class StyledMenuComponent implements OnInit {
  constructor(protected sServ: StyleService) { }

  isBulma = ()=> this.sServ.isBulma();
  isBootstrap = ()=> this.sServ.isBootstrap();
  isFoundation = ()=> this.sServ.isFoundation();

  ngOnInit() {
  }
  
  bulmaMenuMap: BBCssMap = {
    'menu': ['dropdown', 'is-active'],
    'toggle':'dropdown-trigger',
    'panel':'dropdown-menu'
  }

  bootstrapMenuMap: BBCssMap = {
    'menu': 'dropdown',
    'panel':'dropdown-menu'
  }

  foundationMenuMap: BBCssMap = {
    'panel': ['is-dropdown-submenu', 'first-sub', 'js-dropdown-active'],
  }

  makeMenuAnimations(origin: 'top' | 'bottom') {
    return [
      transition('open<=>closed',animate('150ms')),
      state('open',style({
        'transform-origin': `${origin}`,
        'transform': 'scaleY(1.0)'
      })),
      state('closed',style({
        'transform-origin': `${origin}`,
        'transform': 'scaleY(0.0)'
      })),
      state('void',style({
        'transform-origin': `${origin}`,
        'transform': 'scaleY(0.0)'
      }))
    ]; 
  }

  menuAnimations : (AnimationTransitionMetadata | AnimationStateMetadata)[];
}
