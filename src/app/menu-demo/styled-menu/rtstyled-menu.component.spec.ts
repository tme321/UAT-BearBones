import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTStyledMenuComponent } from './rtstyled-menu.component';

describe('RTStyledMenuComponent', () => {
  let component: RTStyledMenuComponent;
  let fixture: ComponentFixture<RTStyledMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTStyledMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTStyledMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
