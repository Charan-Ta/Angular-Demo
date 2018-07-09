import { SeconddashboardModule } from './seconddashboard.module';

describe('SeconddashboardModule', () => {
  let seconddashboardModule: SeconddashboardModule;

  beforeEach(() => {
    seconddashboardModule = new SeconddashboardModule();
  });

  it('should create an instance', () => {
    expect(seconddashboardModule).toBeTruthy();
  });
});
