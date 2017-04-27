import { Injectable }   from '@angular/core';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import { Observable }   from 'rxjs/Observable';
import { RESPUESTA }    from './mock-ingreso';
import { Jugador }      from './jugador';
import { Ingreso }      from './ingreso';

@Injectable()
export class IngresoService {

    validateIngreso(ingreso: Ingreso): Promise<Jugador> {
      return Promise.resolve(RESPUESTA);

    }
/*  constructor(private http:Http) { }

//  Ingresar():Observable<Response>{
      return this.http
             .get('http://ip.jsontest.com/');
    }
*/
}
