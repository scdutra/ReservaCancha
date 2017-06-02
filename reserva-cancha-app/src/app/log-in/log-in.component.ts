import { Component, OnInit }  from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { MockAuthenticationService } from '../services/mock-authentication.service';
import { Router } from '@angular/router';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  model: any = {};
  jugador: Jugador;

  constructor (
      private router: Router,
      private authenticationService: MockAuthenticationService) {
  }

  loginUser() {
      console.log('loginUser', this.model.email, this.model.clave);
      this.authenticationService.login(this.model.email, this.model.clave)
        .then(
          respuesta => {
            this.jugador = respuesta;
            this.router.navigate(['/user',this.jugador.id,'reserva-cancha']);
          }
        )
      }

  onSubmit(): void {
    console.log('Submit User');
    this.loginUser();
  }

  ngOnInit() {
    console.log('LogInComponent');
  }

}
