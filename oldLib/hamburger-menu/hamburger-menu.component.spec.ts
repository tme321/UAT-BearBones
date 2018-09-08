/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBHamburgerMenu } from './hamburger-menu.component';

describe('BBHamburgerMenu', () => {
  let component: BBHamburgerMenu;
  let fixture: ComponentFixture<BBHamburgerMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBHamburgerMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBHamburgerMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
