import { TestBed, inject } from '@angular/core/testing';

import { BBContentConductorService } from './content-conductor.service';

describe('BBContentConductorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBContentConductorService]
    });
  });

  it('should be created', inject([BBContentConductorService], (service: BBContentConductorService) => {
    expect(service).toBeTruthy();
  }));
});
