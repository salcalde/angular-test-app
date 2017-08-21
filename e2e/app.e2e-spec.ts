import { AngularTestAppPage } from './app.po';

describe('angular-test-app App', () => {
  let page: AngularTestAppPage;

  beforeEach(() => {
    page = new AngularTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
