import { BBContentConductorModule } from './content-conductor.module';

describe('BBContentConductorModule', () => {
  let contentConductorModule: BBContentConductorModule;

  beforeEach(() => {
    contentConductorModule = new BBContentConductorModule();
  });

  it('should create an instance', () => {
    expect(contentConductorModule).toBeTruthy();
  });
});
