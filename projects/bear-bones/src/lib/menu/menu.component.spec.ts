/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBMenu } from './menu.component';

describe('BBMenu', () => {
  let component: BBMenu;
  let fixture: ComponentFixture<BBMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
