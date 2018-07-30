import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NavigationLink, MenuInput } from './menu-items/menu-items.components';
import { HomeComponent } from './home';
import { ColorViewerComponent } from './color-viewer';
import { ColorButtonComponent } from './color-button';
import { CollapsingMenuColorWidgetComponent } from './collapsing-menu-color-widget';
import { DropdownMenuColorWidgetComponent } from './dropdown-menu-color-widget';
import { FooComponent } from './home/foo.component';
import { DemoDropdownInputService } from './demo-dropdown-service/demo-dropdown-input.service';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

import { BBCollapsingMenuModule, BBCommonModule, BBDragAndDropModule, BBDropdownInputModule, BBDropdownMenuModule, BBHamburgerMenuModule, BBMultiSelectModule, BBSlideoutMenuModule, BBSlidingPanelModule, BBDropdownInputServiceToken, BBAlternatingPanelModule, BBContentConductorModule, BBDefaultContentConductorModule, BBDynamicAnimationsModule, BBDefaultDynamicAnimationsHandlerModule } from 'BearBones';

const BBModules = [  
  BBCollapsingMenuModule.forRoot(), 
  BBCommonModule.forRoot(), 
  BBDragAndDropModule.forRoot(), 
  BBDropdownInputModule.forRoot(), 
  BBDropdownMenuModule.forRoot(), 
  BBHamburgerMenuModule.forRoot(), 
  BBMultiSelectModule.forRoot(), 
  BBSlideoutMenuModule.forRoot(), 
  BBSlidingPanelModule.forRoot(),
  BBContentConductorModule.forRoot(), 
  BBAlternatingPanelModule.forRoot(), 
  BBDefaultContentConductorModule.forRoot(),
  BBDynamicAnimationsModule.forRoot(),
  BBDefaultDynamicAnimationsHandlerModule.forRoot(),
];

function dddisFactory() { 
  return new DemoDropdownInputService();
}

@NgModule({
  declarations: [
    AppComponent,
	  NavigationLink,
	  MenuInput,
	  HomeComponent,
	  ColorViewerComponent,
	  ColorButtonComponent,
	  CollapsingMenuColorWidgetComponent,
    DropdownMenuColorWidgetComponent,
    FooComponent,
    DragAndDropComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
	  ReactiveFormsModule,
    HttpModule,
	  RouterModule,
	  AppRoutingModule,
    ...BBModules,
  ],
  providers: [
    { provide: BBDropdownInputServiceToken, useClass: DemoDropdownInputService},
  ],
  entryComponents: [
    NavigationLink,
    MenuInput,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
