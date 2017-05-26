import { Component, OnInit } from '@angular/core';
import { Jugador }  from '../jugador';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {
  title = 'Reserva Online de Canchas';
  persona: Jugador;

  constructor() {
  }

  ngOnInit() {
    console.log('FirstViewComponent');
  }

}
