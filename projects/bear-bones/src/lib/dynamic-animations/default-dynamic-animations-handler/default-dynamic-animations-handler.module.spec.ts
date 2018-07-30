import { BBDefaultDynamicAnimationsHandlerModule } from './default-dynamic-animations-handler.module';

describe('BBDefaultDynamicAnimationsHandlerModule', () => {
  let defaultDynamicAnimationsHandlerModule: BBDefaultDynamicAnimationsHandlerModule;

  beforeEach(() => {
    defaultDynamicAnimationsHandlerModule = new BBDefaultDynamicAnimationsHandlerModule();
  });

  it('should create an instance', () => {
    expect(defaultDynamicAnimationsHandlerModule).toBeTruthy();
  });
});
