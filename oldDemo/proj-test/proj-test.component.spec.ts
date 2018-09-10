import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjTestComponent } from './proj-test.component';

describe('ProjTestComponent', () => {
  let component: ProjTestComponent;
  let fixture: ComponentFixture<ProjTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
