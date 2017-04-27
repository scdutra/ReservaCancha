import { ReservaCanchaAppPage } from './app.po';

describe('reserva-cancha-app App', () => {
  let page: ReservaCanchaAppPage;

  beforeEach(() => {
    page = new ReservaCanchaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
