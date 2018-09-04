import { CssMapperModule } from './css-mapper.module';

describe('CssMapperModule', () => {
  let cssMapperModule: CssMapperModule;

  beforeEach(() => {
    cssMapperModule = new CssMapperModule();
  });

  it('should create an instance', () => {
    expect(cssMapperModule).toBeTruthy();
  });
});
