import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTStyledMenuComponent } from './mtstyled-menu.component';

describe('MTStyledMenuComponent', () => {
  let component: MTStyledMenuComponent;
  let fixture: ComponentFixture<MTStyledMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTStyledMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTStyledMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
