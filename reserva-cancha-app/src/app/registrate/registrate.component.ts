import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Params } from '@angular/router';
import { Jugador }           from '../jugador';
import { AltaJugadorService } from '../alta-jugador.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css'],
  providers: [AltaJugadorService]
})

export class RegistrateComponent implements OnInit {
  jugador: Jugador;
  submitted = false;

  constructor( private altaJugadorService: AltaJugadorService ) { }

  model = new Jugador('');

  onSumit(): void {
    this.altaJugadorService.crearJugador(this.model)
      .then(jugador => this.jugador = jugador);
      this.submitted = true;
      console.log(this.jugador);
  }

  get diagnostic() {return JSON.stringify(this.jugador); }

  ngOnInit() {
  }

}
