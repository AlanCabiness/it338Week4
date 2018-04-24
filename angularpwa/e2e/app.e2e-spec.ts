import { AngularpwaPage } from './app.po';

describe('angularpwa App', function() {
  let page: AngularpwaPage;

  beforeEach(() => {
    page = new AngularpwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
