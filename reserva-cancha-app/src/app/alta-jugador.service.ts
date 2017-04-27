import { Injectable } from '@angular/core';

import { Jugador }    from './jugador';
import { RESPUESTA }  from './mock-ingreso';

@Injectable()
export class AltaJugadorService {

  constructor() { }

  crearJugador(jugador: Jugador): Promise<Jugador> {
    return Promise.resolve(RESPUESTA);
  }

}
