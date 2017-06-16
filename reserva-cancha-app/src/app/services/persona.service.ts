import { Injectable }   from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { RESPUESTA }    from './mock-ingreso';
import { Jugador }      from '../jugador';
import { AppSettings }  from '../app-setting';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonaService {
  PERSONA = '/persona';
  //'/pp4.php/personas';
  LOGIN= '/login.php/login';
  jugador: Jugador;
  resp: number = 0;

  constructor(private _http: Http) { }
  /* Recuperar persona */

  recuperarPersonaService(persona: Jugador): Promise<Jugador> {

      console.log(`1: ${AppSettings.API_ENDPOINT}${this.LOGIN}`);

      var data = JSON.parse( JSON.stringify(persona) );
      console.log('2');
      console.log(data);

      return Promise.resolve(this._http
          .post(`${AppSettings.API_ENDPOINT}${this.LOGIN}`,data)
          .subscribe((value: Response) => { var resp = <Jugador>value.json()
              console.log('3');
              console.log(resp);
              console.log(value);
            }, error => {
                  console.log('Error:');
                  console.log(error.json())
              })
      )
}

  /* Alta persona*/

  altaPersonaService(persona: Jugador): Observable<Jugador> {

    console.log(`1 ${AppSettings.API_ENDPOINT}${this.PERSONA}`);
    var data = JSON.parse( JSON.stringify(persona) );
    console.log('2');
    console.log(data);

    return this._http
        .post(`${AppSettings.API_ENDPOINT}${this.PERSONA}`,data);
  }

  personaDetalleService(id: number): Promise<Jugador> {

      console.log(`1: ${AppSettings.API_ENDPOINT}${this.LOGIN}`);
      var data = JSON.parse( '{"id":"'+id+'"}' );
      console.log('2 ');
      console.log(data);

      return Promise.resolve(this._http

          .post(`${AppSettings.API_ENDPOINT}${this.LOGIN}`,data)
          .subscribe(value1 => { alert('ok');
              }, error => {
                  console.log(error.json())
              })
      )
  }

}
