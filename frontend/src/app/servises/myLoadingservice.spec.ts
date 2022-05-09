/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadingService } from './myLoading.service';

describe('Service: LoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService]
    });
  });

  it('should ...', inject([LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));

});
