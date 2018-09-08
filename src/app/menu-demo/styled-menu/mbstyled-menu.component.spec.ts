import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBStyledMenuComponent } from './mbstyled-menu.component';

describe('MBStyledMenuComponent', () => {
  let component: MBStyledMenuComponent;
  let fixture: ComponentFixture<MBStyledMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBStyledMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBStyledMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
