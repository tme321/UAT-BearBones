import { TestBed, inject } from '@angular/core/testing';

import { DefaultStateCssMapperService } from './default-state-css-mapper.service';

describe('DefaultStateCssMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultStateCssMapperService]
    });
  });

  it('should be created', inject([DefaultStateCssMapperService], (service: DefaultStateCssMapperService) => {
    expect(service).toBeTruthy();
  }));
});
