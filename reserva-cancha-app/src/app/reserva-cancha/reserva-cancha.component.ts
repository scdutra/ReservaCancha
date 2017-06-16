import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../services/persona.service';
import 'rxjs/add/operator/switchMap';
import { Cancha } from '../cancha';
import { CanchaService } from '../services/cancha.service';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-reserva-cancha',
  templateUrl: './reserva-cancha.component.html',
  styleUrls: ['./reserva-cancha.component.css']
})
export class ReservaCanchaComponent implements OnInit {
canchas: Cancha[];
selectedCancha: Cancha;
subtitle = 'Mirá las reservas y la disponibilidad del día de hoy';
id: number;

  constructor(
    private personaService: PersonaService,
    private canchaService: CanchaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  recuperarCanchasLocal(): void {
    this.canchaService.recuperarCanchasLocal()
      .then(canchas => this.canchas = canchas );
  }
  recuperarCanchasService(): void {
    this.canchaService.recuperarCanchasService()
      .subscribe(canchas => {this.canchas = canchas; console.log(canchas);}, err => console.log(err) );
  }


  onSelect(canchas: Cancha): void {
    this.selectedCancha = canchas;
  }
  gotoEdit(): void {
    this.router.navigate(['../cancha-detalle', this.selectedCancha.id], { relativeTo: this.route });
  }

  ngOnInit(): void {
      console.log('ReservaCanchaComponent');
      this.recuperarCanchasService();
      // this.recuperarCanchasLocal();
    }
}
