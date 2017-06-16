import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Params } from '@angular/router';
import { Jugador }           from '../jugador';
import { PersonaService } from '../services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})

export class RegistrateComponent implements OnInit {
  persona: Jugador;


  constructor( private router: Router, private personaService: PersonaService ) {
      this.persona = new Jugador();
   }

  registracion(): void {
    this.personaService.altaPersonaService(this.persona)
      .subscribe(persona => {
        this.persona = persona;
        if (persona.id > 0)
        {
          localStorage.setItem('Jpersona', JSON.stringify(this.persona));
          console.log(localStorage.getItem('Jpersona'));
          this.router.navigate(['/reserva-cancha', this.persona.id]);
        }
      },
      err => console.log("mi errror")
    );
  }

  ngOnInit() {
    console.log('RegistrateComponent');
  }

}
