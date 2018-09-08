/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBSlideoutMenu } from './slideout-menu.component';

describe('BBSlideoutMenu', () => {
  let component: BBSlideoutMenu;
  let fixture: ComponentFixture<BBSlideoutMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSlideoutMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSlideoutMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
