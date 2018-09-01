import { BBMediaQueryModule } from './media-query.module';

describe('MediaQueryModule', () => {
  let mediaQueryModule: BBMediaQueryModule;

  beforeEach(() => {
    mediaQueryModule = new BBMediaQueryModule();
  });

  it('should create an instance', () => {
    expect(mediaQueryModule).toBeTruthy();
  });
});
