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
  LOGIN= '/session';

  constructor(
    private router: Router,
    private http: Http,
  ){
  
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


  login(email: string, clave: string): Observable<Response> {
    console.log('login');
    return this.http.post(`${AppSettings.API_ENDPOINT}${this.LOGIN}`, JSON.stringify({ email: email, clave: clave }))
  }

}
