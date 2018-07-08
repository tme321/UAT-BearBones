import { TestBed, inject } from '@angular/core/testing';

import { BBAnimationStatesService } from './animation-states.service';

describe('BBAnimationStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBAnimationStatesService]
    });
  });

  it('should be created', inject([BBAnimationStatesService], (service: BBAnimationStatesService) => {
    expect(service).toBeTruthy();
  }));
});
