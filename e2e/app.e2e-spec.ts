import { SeafoodBuffetPage } from './app.po';

describe('seafood-buffet App', () => {
  let page: SeafoodBuffetPage;

  beforeEach(() => {
    page = new SeafoodBuffetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
