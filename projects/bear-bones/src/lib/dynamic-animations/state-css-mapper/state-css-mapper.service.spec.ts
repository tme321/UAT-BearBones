import { TestBed, inject } from '@angular/core/testing';

import { BBStateCssMapperService } from './state-css-mapper.service';

describe('BBStateCssMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBStateCssMapperService]
    });
  });

  it('should be created', inject([BBStateCssMapperService], (service: BBStateCssMapperService) => {
    expect(service).toBeTruthy();
  }));
});
