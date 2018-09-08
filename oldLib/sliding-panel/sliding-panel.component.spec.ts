/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBSlidingPanel } from './sliding-panel.component';

describe('BBSlidingPanelComponent', () => {
  let component: BBSlidingPanel;
  let fixture: ComponentFixture<BBSlidingPanel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSlidingPanel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSlidingPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
