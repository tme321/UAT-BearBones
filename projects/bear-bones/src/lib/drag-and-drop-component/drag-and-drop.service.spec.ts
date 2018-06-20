import { TestBed, inject } from '@angular/core/testing';

import { BBDragAndDropService } from './drag-and-drop.service';

describe('BBDragAndDropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBDragAndDropService]
    });
  });

  it('should be created', inject([BBDragAndDropService], (service: BBDragAndDropService) => {
    expect(service).toBeTruthy();
  }));
});
