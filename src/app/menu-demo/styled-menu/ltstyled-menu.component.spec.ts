import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LTStyledMenuComponent } from './ltstyled-menu.component';

describe('LTStyledMenuComponent', () => {
  let component: LTStyledMenuComponent;
  let fixture: ComponentFixture<LTStyledMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LTStyledMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LTStyledMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
