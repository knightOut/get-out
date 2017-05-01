import { GetOutPage } from './app.po';

describe('get-out App', function() {
  let page: GetOutPage;

  beforeEach(() => {
    page = new GetOutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
