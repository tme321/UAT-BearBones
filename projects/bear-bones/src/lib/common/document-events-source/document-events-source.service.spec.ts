import { TestBed, inject } from '@angular/core/testing';

import { BBDocumentEventsSourceService } from './document-events-source.service';

describe('DocumentEventsSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBDocumentEventsSourceService]
    });
  });

  it('should be created', inject([BBDocumentEventsSourceService], (service: BBDocumentEventsSourceService) => {
    expect(service).toBeTruthy();
  }));
});
