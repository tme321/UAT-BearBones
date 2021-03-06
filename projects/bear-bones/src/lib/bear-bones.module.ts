/*

import { NgModule, ModuleWithProviders } from '@angular/core';

import { BBSlidingPanelModule } from './sliding-panel';
import { BBDropdownMenuModule } from './dropdown-menu';
import { BBSlideoutMenuModule } from './slideout-menu';
import { BBDropdownInputModule } from './dropdown-input';
import { BBHamburgerMenuModule } from './hamburger-menu';
import { BBCollapsingMenuModule } from './collapsing-menu';
import { BBMultiSelectModule } from './multi-select';
import { BBCommonModule } from './common';
import { BBDragAndDropComponentModule } from './drag-and-drop-component';
import { BBTabModule } from './tab';
import { BBDragAndDropModule } from './drag-and-drop';
import { BBSortableModule } from './sortable';

const BB_MODULES = [
    BBSlidingPanelModule,
    BBDropdownMenuModule,
    BBSlideoutMenuModule,
    BBDropdownInputModule,
    BBHamburgerMenuModule,
    BBCollapsingMenuModule,
    BBMultiSelectModule,
    BBCommonModule,
    BBDragAndDropComponentModule,
    BBTabModule,
    BBDragAndDropModule,
    BBSortableModule,
];

/**
 * This module only exists to allow the demo 
 * to import the entire library quickly.  It 
 * should not be used by consumers of the 
 * library and is not exported as part of 
 * the distrbuted package.
 * /
@NgModule({
  imports: [
    BBSlidingPanelModule.forRoot(),
    BBDropdownMenuModule.forRoot(),
    BBSlideoutMenuModule.forRoot(),
    BBDropdownInputModule.forRoot(),
    BBHamburgerMenuModule.forRoot(),
    BBCollapsingMenuModule.forRoot(),
    BBMultiSelectModule.forRoot(),
    BBCommonModule.forRoot(),
    BBDragAndDropComponentModule.forRoot(),
    BBTabModule.forRoot(),
    BBDragAndDropModule.forRoot(),
    BBSortableModule.forRoot()
    
  ],
  exports: BB_MODULES
})
export class BBRootModule { }

@NgModule({
  imports: BB_MODULES,
  exports: BB_MODULES,
})
export class BearBonesModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: BBRootModule, providers: []};
  }
}

*/