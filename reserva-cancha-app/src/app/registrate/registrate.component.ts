import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador }           from '../jugador';
import { PersonaService } from '../services/persona.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})

export class RegistrateComponent implements OnInit {
  persona: Jugador;
  msj: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personaService: PersonaService ) {
      this.persona = new Jugador();
   }

  registracion(): void {
    this.personaService.altaPersonaService(this.persona)
    .subscribe(value1 => {
                  alert('ok');
                  this.router.navigate(['../log-in'], { relativeTo: this.route });
              }, error => (this.msj = error.json())
    )
  }

  ngOnInit() {
    console.log('RegistrateComponent');
  }

}
