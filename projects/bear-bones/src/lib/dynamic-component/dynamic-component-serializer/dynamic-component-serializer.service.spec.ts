import { TestBed, inject } from '@angular/core/testing';

import { BBDynamicComponentSerializerService } from './dynamic-component-serializer.service';

describe('BBDynamicComponentSerializerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBDynamicComponentSerializerService]
    });
  });

  it('should be created', inject([BBDynamicComponentSerializerService], (service: BBDynamicComponentSerializerService) => {
    expect(service).toBeTruthy();
  }));
});
