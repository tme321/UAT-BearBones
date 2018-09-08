import { MenuDemoModule } from './menu-demo.module';

describe('MenuDemoModule', () => {
  let menuDemoModule: MenuDemoModule;

  beforeEach(() => {
    menuDemoModule = new MenuDemoModule();
  });

  it('should create an instance', () => {
    expect(menuDemoModule).toBeTruthy();
  });
});
