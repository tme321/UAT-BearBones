/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBDropdownMenu } from './dropdown-menu.component';

describe('BBDropdownMenu', () => {
  let component: BBDropdownMenu;
  let fixture: ComponentFixture<BBDropdownMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBDropdownMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBDropdownMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
