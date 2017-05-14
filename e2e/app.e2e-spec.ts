import { BRAPPPage } from './app.po';

describe('br-app App', () => {
  let page: BRAPPPage;

  beforeEach(() => {
    page = new BRAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
