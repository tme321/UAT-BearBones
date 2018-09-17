import { BBSideMenuModule } from './side-menu.module';

describe('SideMenuModule', () => {
  let sideMenuModule: BBSideMenuModule;

  beforeEach(() => {
    sideMenuModule = new BBSideMenuModule();
  });

  it('should create an instance', () => {
    expect(sideMenuModule).toBeTruthy();
  });
});
