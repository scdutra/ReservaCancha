import { Injectable } from '@angular/core';
import { Jugador } from '../jugador';
import { RESPUESTA } from './mock-ingreso';

@Injectable()
export class MockAuthenticationService {
jugador: Jugador;
  constructor() { }

  login(email: string, clave: string): Promise<Jugador> {
    console.log('mock-login');
    this.jugador = RESPUESTA;

    console.log(this.jugador);

    localStorage.setItem('currentUser', JSON.stringify({ id: this.jugador.id, nombre: this.jugador.nombre}));

    return Promise.resolve(this.jugador);

    }
  }
