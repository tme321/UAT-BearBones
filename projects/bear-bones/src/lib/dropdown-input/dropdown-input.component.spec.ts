/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBDropdownInput } from './dropdown-input.component';

describe('BBDropdownInput', () => {
  let component: BBDropdownInput;
  let fixture: ComponentFixture<BBDropdownInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBDropdownInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBDropdownInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
