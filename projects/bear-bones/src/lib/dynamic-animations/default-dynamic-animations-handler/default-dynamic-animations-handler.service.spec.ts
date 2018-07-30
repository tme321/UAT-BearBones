import { TestBed, inject } from '@angular/core/testing';

import { BBDefaultDynamicAnimationsHandlerService } from './default-dynamic-animations-handler.service';

describe('BBDefaultDynamicAnimationsHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBDefaultDynamicAnimationsHandlerService]
    });
  });

  it('should be created', inject([BBDefaultDynamicAnimationsHandlerService], (service: BBDefaultDynamicAnimationsHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
