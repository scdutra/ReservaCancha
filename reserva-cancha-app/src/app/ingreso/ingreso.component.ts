import { Component, OnInit } from '@angular/core';
import { Jugador }  from '../jugador';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  title = 'Reserva Online de Canchas';
  persona: Jugador;

  constructor() {
  }

  ngOnInit() {
    console.log('IngresoComponent');
  }

}
