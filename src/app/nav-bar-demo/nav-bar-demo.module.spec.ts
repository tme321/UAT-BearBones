import { NavBarDemoModule } from './nav-bar-demo.module';

describe('NavBarDemoModule', () => {
  let navBarDemoModule: NavBarDemoModule;

  beforeEach(() => {
    navBarDemoModule = new NavBarDemoModule();
  });

  it('should create an instance', () => {
    expect(navBarDemoModule).toBeTruthy();
  });
});
