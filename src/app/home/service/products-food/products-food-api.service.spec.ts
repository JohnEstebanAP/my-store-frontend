import { TestBed } from '@angular/core/testing';

import { ProductsFoodApiService } from './products-food-api.service';

describe('ProductsFoodApiService', () => {
  let service: ProductsFoodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFoodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
