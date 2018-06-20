import { Injectable } from '@angular/core';

@Injectable()
export class DragAndDropService {
  el: any;
  dropzoneIndex: number;
  droppableIndex: number;
  model: Array<any>;
  dropzones: Array<string> = [];

  constructor() { }
}
