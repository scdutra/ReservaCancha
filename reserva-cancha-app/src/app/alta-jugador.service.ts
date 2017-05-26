import { Injectable } from '@angular/core';

import { Jugador }    from './jugador';
import { RESPUESTA }  from './services/mock-ingreso';

@Injectable()
export class AltaJugadorService {

  constructor() { }

  crearJugador(jugador: Jugador): Promise<Jugador> {
    console.log("entre al service - AltaJugadorService");
    return Promise.resolve(RESPUESTA);
  }

}
