import { SortableModule } from './sortable.module';

describe('SortableModule', () => {
  let sortableModule: SortableModule;

  beforeEach(() => {
    sortableModule = new SortableModule();
  });

  it('should create an instance', () => {
    expect(sortableModule).toBeTruthy();
  });
});
