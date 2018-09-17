import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledSideMenuComponent } from './styled-side-menu.component';

describe('StyledSideMenuComponent', () => {
  let component: StyledSideMenuComponent;
  let fixture: ComponentFixture<StyledSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
