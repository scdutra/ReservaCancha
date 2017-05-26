import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';
import { AppSettings }  from '../app-setting';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Jugador } from '../jugador';
import { logInJson } from '../jsonModel';

@Injectable()
export class AuthenticationService {
  public token: string;
  LOGIN= '/login';

  constructor(
    private router: Router,
    private http: Http,
  ){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  createAuthorizationHeader(token: string): Promise<Headers> {
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);

    return Promise.resolve(header);
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(['']);
  }

  login(email: string, clave: string): Observable<logInJson> {
    console.log('login');
      return this.http.post(`${AppSettings.endpoint}${this.LOGIN}`, JSON.stringify({ email: email, clave: clave }))
          .map((response: Response) => {
                  console.log(response);

                  var logInResponse = response.json();
                  logInResponse.status = response.status;

                  console.log(logInResponse);

                  localStorage.setItem('currentUser', JSON.stringify({ id: logInResponse.persona.id, nombre: logInResponse.persona.nombre, token: logInResponse.token }));

                  return logInResponse;

          });
  }

}
