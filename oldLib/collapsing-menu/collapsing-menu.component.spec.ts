/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BBCollapsingMenu } from './collapsing-menu.component';

describe('BBCollapsingMenu', () => {
  let component: BBCollapsingMenu;
  let fixture: ComponentFixture<BBCollapsingMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBCollapsingMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBCollapsingMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
