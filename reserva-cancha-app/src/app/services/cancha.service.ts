import { Injectable } from '@angular/core';
import { Cancha }     from '../cancha';
import { CANCHAS }     from '../cancha';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { AppSettings }  from '../app-setting';

@Injectable()
export class CanchaService {

  CANCH= '/canchas'
  canchaDet: Cancha;
  canchaOrig: Cancha;
  canchas: Cancha[];

  constructor(private _http: Http) {}

  recuperarCanchaDetalleLocal(id: number): Promise<Cancha>{
    console.log('recuperarCanchaDetalleLocal ', id);
    this.canchaDet = this.recuperarCanchasLocal()
                .then(canchas => canchas.find(cancha => cancha.id === id));
    console.log (this.canchaDet);
    return Promise.resolve(this.canchaDet);
  }

  recuperarCanchaDetalleService(id: number): Promise<Cancha>{
    console.log(`recuperarCanchasService: ${AppSettings.API_ENDPOINT}${this.CANCH} `, id);
    return Promise.resolve(this._http

        .get(`${AppSettings.API_ENDPOINT}${this.CANCH}`,JSON.stringify({ id: id}))
        .subscribe((value: Response) => { this.canchas = value.json()}));
  }


  recuperarCanchasLocal(): Promise<Cancha[]> {
      console.log('recuperarCanchasLocal');
      return Promise.resolve(CANCHAS);
  }

  recuperarCanchasService(): Observable<Cancha[]> {

    console.log(`recuperarCanchasService: ${AppSettings.API_ENDPOINT}${this.CANCH}`);
    return this._http
      .get(`${AppSettings.API_ENDPOINT}${this.CANCH}`)
      .flatMap((response: Response) =>
             //Waits until all the requests are completed before emitting
             //an array of results
          Observable.forkJoin
          (
            response.json().files.map
            (
              campo => this._http.get(campo).map(resp => resp.json().title)
            )
          )
        );
  }
  borrarCanchaService(canchaOrig: Cancha): Promise<Cancha> {

    console.log(`borrarCanchaService: ${AppSettings.API_ENDPOINT}${this.CANCH}`);
    var data = JSON.parse( JSON.stringify(canchaOrig) );
    console.log('2 ');
    console.log(data);

    return Promise.resolve(this._http

        .delete(`${AppSettings.API_ENDPOINT}${this.CANCH}`,data)
        .subscribe((value: Response) => { this.canchaOrig = value.json()})
   )
  }
  actualizarCanchaService(canchaOrig: Cancha): Promise<Cancha> {

    console.log(`actualizarCanchaService: ${AppSettings.API_ENDPOINT}${this.CANCH}`);
    var data = JSON.parse( JSON.stringify(canchaOrig) );
    console.log('2 ');
    console.log(data);

    return Promise.resolve(this._http

        .put(`${AppSettings.API_ENDPOINT}${this.CANCH}`,data)
        .subscribe((value: Response) => { this.canchaOrig = value.json()})
   )
  }
  altaCanchaService(canchaOrig: Cancha): Promise<Cancha>  {

      console.log(`altaCanchaService: ${AppSettings.API_ENDPOINT}${this.CANCH}`);
      var data = JSON.parse( JSON.stringify(canchaOrig) );
      console.log('2 ');
      console.log(data);

      return Promise.resolve(this._http

          .post(`${AppSettings.API_ENDPOINT}${this.CANCH}`,data)
          .subscribe((value: Response) => { alert('Cancha ingresada'); this.canchaOrig = value.json();
                              }, error => {alert('ERROOOOOOR!')}
          )
      );
  }

}
