import { Injectable } from '@angular/core';
import { Cancha }     from '../cancha';
import { CANCHAS }     from '../cancha';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { AppSettings }  from '../app-setting';

@Injectable()
export class CanchaService {

  CANCH= '/login.php/login'
  canchaDet: Cancha;
  canchas: Cancha[];

  constructor(private _http: Http) {}

  recuperarCanchaDetalle(id: number): Promise<Cancha>{
    console.log('recuperarCanchaDetalle ', id);
    this.canchaDet = this.recuperarCanchasLocal()
                .then(canchas => canchas.find(cancha => cancha.id === id));
    console.log (this.canchaDet);
    return Promise.resolve(this.canchaDet);
  }

  recuperarCanchasLocal(): Promise<Cancha[]> {
      return Promise.resolve(CANCHAS);
  }

  recuperarCanchasService(): Promise<Cancha[]> {

      console.log(`${AppSettings.endpoint}${this.CANCH}`);

      return
      // Promise.resolve(this._http
      //     .get(`${AppSettings.endpoint}${this.CANCH}`)
      //     .map((value: Response) => { let this.canchas = value.json()}
      //
      //   )
      // )
  }

}
