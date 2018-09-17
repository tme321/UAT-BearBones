import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { BBCommonModule, BBNavBarModule, BBMenuModule, BBToggleModule } from '@uat/bear-bones';
import { CssMapperModule } from '@uat/bear-bones';
import { DynamicAnimationsModule, ContentConductorModule } from '@uat/dvk';
import { MenuDemoModule } from './menu-demo/menu-demo.module';
import { NavBarDemoModule } from './nav-bar-demo/nav-bar-demo.module';
import { SideMenuDemoModule } from './side-menu-demo/side-menu-demo.module';


//import { BBCollapsingMenuModule, BBDropdownMenuModule, BBHamburgerMenuModule, BBMultiSelectModule, BBSlideoutMenuModule, BBSlidingPanelModule,  BBAlternatingPanelModule, BBContentConductorModule,  } from '@uat/bear-bones';

/*
import { NavigationLink, MenuInput } from './menu-items/menu-items.components';
import { ColorViewerComponent } from './color-viewer';
import { ColorButtonComponent } from './color-button';
import { CollapsingMenuColorWidgetComponent } from './collapsing-menu-color-widget';
import { DropdownMenuColorWidgetComponent } from './dropdown-menu-color-widget';
import { FooComponent } from './home/foo.component';
import { DemoDropdownInputService } from './demo-dropdown-service/demo-dropdown-input.service';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { ProjTestComponent } from './proj-test/proj-test.component';
import { ProjContComponent } from './proj-test/proj-cont/proj-cont.component';
*/


/*
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
  BBDynamicAnimationsModule.forRoot(),
  BBDynamicComponentModule.forRoot()
];
*/

/*
function dddisFactory() { 
  return new DemoDropdownInputService();
}
*/

@NgModule({
  declarations: [
    AppComponent,
	  HomeComponent,
    
    /*
    NavigationLink,
	  MenuInput,
	  ColorViewerComponent,
	  ColorButtonComponent,
	  CollapsingMenuColorWidgetComponent,
    DropdownMenuColorWidgetComponent,
    FooComponent,
    DragAndDropComponent,
    ProjTestComponent,
    ProjContComponent
    */
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
	  ReactiveFormsModule,
    HttpModule,
	  RouterModule,
    AppRoutingModule,

    DynamicAnimationsModule.forRoot(),
    ContentConductorModule.forRoot(),

    MenuDemoModule,
    NavBarDemoModule,
    SideMenuDemoModule,
    
    /*
    BBCommonModule, 
    BBToggleModule,
    BBNavBarModule,
    BBMenuModule,
    CssMapperModule,
    */

  ],
  providers: [
    //{ provide: BBDropdownInputServiceToken, useClass: DemoDropdownInputService},
  ],
  /*
  entryComponents: [
    NavigationLink,
    MenuInput,
    
  ],
  */
  bootstrap: [AppComponent]
})
export class AppModule { }
