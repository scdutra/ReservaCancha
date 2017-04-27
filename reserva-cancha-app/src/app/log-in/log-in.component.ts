import { Component, OnInit }  from '@angular/core';

import { Ingreso }            from '../ingreso';
import { IngresoService }     from '../ingreso.service';
import { Jugador }            from '../jugador';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [IngresoService]
})

export class LogInComponent implements OnInit {
  ingreso: Ingreso;
  jugador: Jugador;

  constructor ( private ingresoService: IngresoService) { }

  model = new Ingreso('ReservaCancha','','');

  onSubmit(): void {
    this.ingresoService.validateIngreso(this.model)
      .then(jugador => this.jugador = jugador);
      //console.log(this.model);
      //console.log(this.jugador);
  }

  //get diagnostic() {return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
