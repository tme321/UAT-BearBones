/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BBDynamicComponentDirective } from './dynamic-component.directive';
import {
    ComponentFactoryResolver,
    ViewContainerRef } from '@angular/core';

describe('Directive: BBDynamicComponentDirective', () => {
  it('should create an instance', () => {
    let directive = new BBDynamicComponentDirective(
      TestBed.get(ViewContainerRef), 
      TestBed.get(ComponentFactoryResolver));
    expect(directive).toBeTruthy();
  });
});
