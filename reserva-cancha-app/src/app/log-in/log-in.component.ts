import { Component, OnInit }  from '@angular/core';
import { Response } from '@angular/http';
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
  msj: string;

  constructor (
      private router: Router,
      private authenticationService: AuthenticationService) {
  }

  loginUser() {
      console.log('loginUser', this.model.email, this.model.clave);
      this.authenticationService.login(this.model.email, this.model.clave)
        .subscribe((response: Response) => {
                      console.log(response);
                      this.jugador = response.json();
                      localStorage.setItem('currentUser', JSON.stringify({ id: this.jugador.id, nombre: this.jugador.nombre }));
                  }, error => {console.log("1"); (this.msj = error.json());}
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
