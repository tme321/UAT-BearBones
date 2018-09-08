/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBToggle } from './toggle.component';

describe('BBToggle', () => {
  let component: BBToggle;
  let fixture: ComponentFixture<BBToggle>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBToggle ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
