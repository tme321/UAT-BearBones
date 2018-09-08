import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBStyledMenuComponent } from './rbstyled-menu.component';

describe('RBStyledMenuComponent', () => {
  let component: RBStyledMenuComponent;
  let fixture: ComponentFixture<RBStyledMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBStyledMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBStyledMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
