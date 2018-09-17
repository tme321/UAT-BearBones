import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuDemoComponent } from './side-menu-demo.component';

describe('SideMenuDemoComponent', () => {
  let component: SideMenuDemoComponent;
  let fixture: ComponentFixture<SideMenuDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
