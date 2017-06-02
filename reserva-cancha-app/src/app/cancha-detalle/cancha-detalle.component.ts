import { Component, OnInit } from '@angular/core';
import { Cancha } from '../cancha';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanchaService } from '../services/cancha.service';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-cancha-detalle',
  templateUrl: './cancha-detalle.component.html',
  styleUrls: ['./cancha-detalle.component.css']
})
export class CanchaDetalleComponent implements OnInit {
cancha: Cancha;
subtitle= 'Armando el campito...';

  constructor(
    private canchaService: CanchaService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    ) {
  }

  ngOnInit(): void {
    this.route.params
       .switchMap((params: Params) =>{
              if(params['id'])
                return this.canchaService.recuperarCanchaDetalleLocal(+params['id']);
                // return this.canchaService.recuperarCanchaDetalleService(+params['id']);
              else
                return Promise.resolve(new Cancha());
          }
       ).subscribe(cancha => this.cancha = cancha)
  }

  goBack(): void {
    this.location.back();
  }

  createField(): void {
    this.canchaService.altaCanchaService(this.cancha)
      .then(cancha => {
        this.cancha = cancha;
        console.log('createField ',this.cancha);
      })
      .then(go => {
        console.log('navigate ');
        this.router.navigate(['../../reserva-cancha'], { relativeTo: this.route });
        }
      )
  }

  deleteField(){
    this.canchaService.borrarCanchaService(this.cancha)
      .then(cancha => {
        this.cancha = cancha;
      });
    this.router.navigate(['../../reserva-cancha'], { relativeTo: this.route });
  }
  updateField(){
    this.canchaService.actualizarCanchaService(this.cancha)
      .then(cancha => {
    this.cancha = cancha;
    this.router.navigate(['../../reserva-cancha'], { relativeTo: this.route });
  });
  }


}
