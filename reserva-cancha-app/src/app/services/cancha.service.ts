import { Injectable } from '@angular/core';
import { Cancha }     from '../cancha';
import { CANCHAS }     from '../cancha';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { AppSettings }  from '../app-setting';

@Injectable()
export class CanchaService {

  CANCH= '/cancha'
  cancha: Cancha;
  canchaOrig: Cancha;
  canchas: Cancha[];

  constructor(private _http: Http) {}

  recuperarCanchaDetalleLocal(id: number): Promise<Cancha>{
    console.log('recuperarCanchaDetalleLocal ', id);
    this.cancha = this.recuperarCanchasLocal()
                .then(cancha => cancha.find(cancha => cancha.id === id));
    console.log (this.cancha);
    return Promise.resolve(this.cancha);
  }

  recuperarCanchaDetalleService(id: number): Observable<Cancha>{
    console.log(`recuperarCanchasService: ${AppSettings.API_ENDPOINT}${this.CANCH}`+ id);
    return this._http
        .get(`${AppSettings.API_ENDPOINT}${this.CANCH}/`+ id)
        .map(response => this.cancha = response.json());
  }

  recuperarCanchasLocal(): Promise<Cancha[]> {
      console.log('recuperarCanchasLocal');
      return Promise.resolve(CANCHAS);
  }

  recuperarCanchasService(): Observable<Cancha[]> {
    console.log(`recuperarCanchasService: ${AppSettings.API_ENDPOINT}${this.CANCH}`);
    return  this._http
      .get(`${AppSettings.API_ENDPOINT}${this.CANCH}`)
      .map(response => this.canchas = response.json());
  }

  borrarCanchaService(id: number): Observable<Response> {
    console.log(`borrarCanchaService: ${AppSettings.API_ENDPOINT}${this.CANCH}`, id);
    var data = JSON.parse( JSON.stringify({id: id}));
    return this._http
        .delete(`${AppSettings.API_ENDPOINT}${this.CANCH}`,data);
  }

  actualizarCanchaService(canchaOrig: Cancha): Observable<Response> {
    console.log(`actualizarCanchaService: ${AppSettings.API_ENDPOINT}${this.CANCH}`, canchaOrig);
    var data = JSON.parse( JSON.stringify(canchaOrig) );
    return this._http
        .put(`${AppSettings.API_ENDPOINT}${this.CANCH}`,data);
  }

  altaCanchaService(canchaOrig: Cancha): Observable<Response>  {
      console.log(`altaCanchaService: ${AppSettings.API_ENDPOINT}${this.CANCH}`);
      var data = JSON.parse( JSON.stringify(canchaOrig) );
      console.log('2 ');
      console.log(data);

      return this._http
          .post(`${AppSettings.API_ENDPOINT}${this.CANCH}`,data);
  }

}
