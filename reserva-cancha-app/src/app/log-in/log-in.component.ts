import { Component, OnInit }  from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { logInJson } from '../jsonModel';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor (
      private router: Router,
      private authenticationService: AuthenticationService) {
  }

  loginUser() {
      console.log('loginUser', this.model.email + this.model.clave);
      this.loading = true;
      this.authenticationService.login(this.model.email, this.model.clave)
          .subscribe(result => {
              if (result.status === 200) {
                  console.log(result);
                  // login successful
                  this.router.navigate(['/user',result.persona.id,'reserva-cancha']);
              } else {
                  // login failed
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
                  console.log('NOK');
              }
          });
  }

  onSubmit(): void {
    console.log('Submit User');
    this.loginUser();
  }

  ngOnInit() {
    console.log('LogInComponent');
  }

}
