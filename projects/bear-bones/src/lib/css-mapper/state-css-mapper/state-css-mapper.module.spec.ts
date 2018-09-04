import { StateCssMapperModule } from './state-css-mapper.module';

describe('StateCssMapperModule', () => {
  let stateCssMapperModule: StateCssMapperModule;

  beforeEach(() => {
    stateCssMapperModule = new StateCssMapperModule();
  });

  it('should create an instance', () => {
    expect(stateCssMapperModule).toBeTruthy();
  });
});
