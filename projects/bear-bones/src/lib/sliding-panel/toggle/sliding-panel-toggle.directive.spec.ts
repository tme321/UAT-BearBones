/* tslint:disable:no-unused-variable */
import { NgZone } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BBSlidingPanelToggle } from './sliding-panel-toggle.directive';

describe('Directive: BBSlidingPanelToggle', () => {
  it('should create an instance', () => {
    let directive = new BBSlidingPanelToggle(
      TestBed.get(NgZone));
    expect(directive).toBeTruthy();
  });
});
