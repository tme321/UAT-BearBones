import { TestBed, inject } from '@angular/core/testing';

import { BBToggleService } from './toggle.service';

describe('ToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBToggleService]
    });
  });

  it('should be created', inject([BBToggleService], (service: BBToggleService) => {
    expect(service).toBeTruthy();
  }));
});
