import { MediaQueryModule } from './media-query.module';

describe('MediaQueryModule', () => {
  let mediaQueryModule: MediaQueryModule;

  beforeEach(() => {
    mediaQueryModule = new MediaQueryModule();
  });

  it('should create an instance', () => {
    expect(mediaQueryModule).toBeTruthy();
  });
});
