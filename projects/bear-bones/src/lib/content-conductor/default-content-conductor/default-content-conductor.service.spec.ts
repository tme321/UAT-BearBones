import { TestBed, inject } from '@angular/core/testing';

import { BBDefaultContentConductorService } from './default-content-conductor.service';

describe('BBDefaultContentConductorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBDefaultContentConductorService]
    });
  });

  it('should be created', inject([BBDefaultContentConductorService], (service: BBDefaultContentConductorService<any>) => {
    expect(service).toBeTruthy();
  }));
});
