import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledMenuComponent } from './styled-menu.component';

describe('StyledMenuComponent', () => {
  let component: StyledMenuComponent;
  let fixture: ComponentFixture<StyledMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
