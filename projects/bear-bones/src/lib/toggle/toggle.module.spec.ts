import { BBToggleModule } from './toggle.module';

describe('ToggleModule', () => {
  let toggleModule: BBToggleModule;

  beforeEach(() => {
    toggleModule = new BBToggleModule();
  });

  it('should create an instance', () => {
    expect(toggleModule).toBeTruthy();
  });
});
