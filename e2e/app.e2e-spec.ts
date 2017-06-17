import { UCliAppPage } from './app.po';

describe('u-cli-app App', () => {
  let page: UCliAppPage;

  beforeEach(() => {
    page = new UCliAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
