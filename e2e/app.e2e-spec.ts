import { AngularUiComponentsPage } from './app.po';

describe('angular-ui-components App', () => {
  let page: AngularUiComponentsPage;

  beforeEach(() => {
    page = new AngularUiComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
