import { BBDefaultContentConductorModule } from './default-content-conductor.module';

describe('BBDefaultContentConductorModule', () => {
  let defaultContainersConductorModule: BBDefaultContentConductorModule;

  beforeEach(() => {
    defaultContainersConductorModule = new BBDefaultContentConductorModule();
  });

  it('should create an instance', () => {
    expect(defaultContainersConductorModule).toBeTruthy();
  });
});
