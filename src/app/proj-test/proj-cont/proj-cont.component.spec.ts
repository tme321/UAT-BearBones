import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjContComponent } from './proj-cont.component';

describe('ProjContComponent', () => {
  let component: ProjContComponent;
  let fixture: ComponentFixture<ProjContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
