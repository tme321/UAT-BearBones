import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LBStyledMenuComponent } from './lbstyled-menu.component';

describe('LBStyledMenuComponent', () => {
  let component: LBStyledMenuComponent;
  let fixture: ComponentFixture<LBStyledMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LBStyledMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LBStyledMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
