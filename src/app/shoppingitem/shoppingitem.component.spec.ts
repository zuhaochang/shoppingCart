/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShoppingitemComponent } from './shoppingitem.component';

describe('Component: Shoppingitem', () => {
  it('should create an instance', () => {
    let component = new ShoppingitemComponent();
    expect(component).toBeTruthy();
  });
});
