import { TestBed, inject } from '@angular/core/testing';

import { BBDynamicAnimationsService } from './dynamic-animations.service';

describe('BBDynamicAnimationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBDynamicAnimationsService]
    });
  });

  it('should be created', inject([BBDynamicAnimationsService], (service: BBDynamicAnimationsService) => {
    expect(service).toBeTruthy();
  }));
});
