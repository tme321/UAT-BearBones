import { SideMenuDemoModule } from './side-menu-demo.module';

describe('SideMenuDemoModule', () => {
  let sideMenuDemoModule: SideMenuDemoModule;

  beforeEach(() => {
    sideMenuDemoModule = new SideMenuDemoModule();
  });

  it('should create an instance', () => {
    expect(sideMenuDemoModule).toBeTruthy();
  });
});
