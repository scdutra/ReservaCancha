import { TestBed, inject } from '@angular/core/testing';

import { AltaJugadorService } from './alta-jugador.service';

describe('AltaJugadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AltaJugadorService]
    });
  });

  it('should ...', inject([AltaJugadorService], (service: AltaJugadorService) => {
    expect(service).toBeTruthy();
  }));
});
