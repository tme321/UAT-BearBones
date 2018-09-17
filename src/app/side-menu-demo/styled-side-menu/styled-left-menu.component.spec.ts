import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledLeftMenuComponent } from './styled-left-menu.component';

describe('StyledLeftMenuComponent', () => {
  let component: StyledLeftMenuComponent;
  let fixture: ComponentFixture<StyledLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
