import { Jugador } from './jugador';

export class logInJson {
  constructor(
    public status: number,
    public persona: Jugador,
    public token: string
  ) {  }
}
