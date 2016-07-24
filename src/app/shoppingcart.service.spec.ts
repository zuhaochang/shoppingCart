/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ShoppingcartService } from './shoppingcart.service';

describe('Shoppingcart Service', () => {
  beforeEachProviders(() => [ShoppingcartService]);

  it('should ...',
      inject([ShoppingcartService], (service: ShoppingcartService) => {
    expect(service).toBeTruthy();
  }));
});
