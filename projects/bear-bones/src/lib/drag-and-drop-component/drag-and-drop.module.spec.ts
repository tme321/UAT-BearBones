import { BBDragAndDropComponentModule } from './drag-and-drop.module';

describe('BBDragAndDropModule', () => {
  let dragAndDropModule: BBDragAndDropComponentModule;

  beforeEach(() => {
    dragAndDropModule = new BBDragAndDropComponentModule();
  });

  it('should create an instance', () => {
    expect(dragAndDropModule).toBeTruthy();
  });
});
