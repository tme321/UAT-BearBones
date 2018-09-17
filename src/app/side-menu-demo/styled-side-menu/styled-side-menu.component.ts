import { Component } from '@angular/core';
import { transition, animate, state, style, AnimationTransitionMetadata, AnimationStateMetadata } from '@angular/animations';
import { BBCssMap } from '@uat/bear-bones';
import { StyleService } from '../../style/style.service';

@Component({
  selector: 'app-styled-side-menu',
  templateUrl: './styled-side-menu.component.html',
  styleUrls: ['./styled-side-menu.component.css']
})
export class StyledSideMenuComponent {
  constructor(protected sServ: StyleService) { }

  isBulma = ()=> this.sServ.isBulma();
  isBootstrap = ()=> this.sServ.isBootstrap();
  isFoundation = ()=> this.sServ.isFoundation();

  bulmaMenuMap: BBCssMap = {
    'menu': ['dropdown', 'is-active'],
    'container':'dropdown-trigger',
    'panel':'dropdown-menu'
  }

  bootstrapMenuMap: BBCssMap = {
    'menu': 'dropdown',
    'panel':'dropdown-menu'
  }

  foundationMenuMap: BBCssMap = {
    'panel': ['is-dropdown-submenu', 'first-sub', 'js-dropdown-active'],
  }

  makeMenuAnimations(origin: 'right' | 'left') {
    return [
      transition('open<=>closed',animate('150ms')),
      state('open',style({
        'transform-origin': `${origin}`,
        'transform': 'scaleX(1.0)'
      })),
      state('closed',style({
        'transform-origin': `${origin}`,
        'transform': 'scaleX(0.0)'
      })),
      state('void',style({
        'transform-origin': `${origin}`,
        'transform': 'scaleX(0.0)'
      }))
    ]; 
  }

  menuAnimations : (AnimationTransitionMetadata | AnimationStateMetadata)[];
}
