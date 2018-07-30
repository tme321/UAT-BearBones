import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBContentConductorComponent } from './content-conductor.component';

describe('BBContentConductorComponent', () => {
  let component: BBContentConductorComponent;
  let fixture: ComponentFixture<BBContentConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBContentConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBContentConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
