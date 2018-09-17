import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBSideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  let component: BBSideMenuComponent;
  let fixture: ComponentFixture<BBSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
