import { BBAnimationStatesModule } from './animation-states.module';

describe('BBAnimationStatesModule', () => {
  let animationStatesModule: BBAnimationStatesModule;

  beforeEach(() => {
    animationStatesModule = new BBAnimationStatesModule();
  });

  it('should create an instance', () => {
    expect(animationStatesModule).toBeTruthy();
  });
});
