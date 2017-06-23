import { VirtualStorePage } from './app.po';

describe('virtual-store App', function() {
  let page: VirtualStorePage;

  beforeEach(() => {
    page = new VirtualStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
