import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledOTLeftMenuComponent } from './styled-otleft-menu.component';

describe('StyledOTLeftMenuComponent', () => {
  let component: StyledOTLeftMenuComponent;
  let fixture: ComponentFixture<StyledOTLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledOTLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledOTLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
