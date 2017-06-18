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
msj: string;

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
                // return this.canchaService.recuperarCanchaDetalleLocal(+params['id']);
                return this.canchaService.recuperarCanchaDetalleService(+params['id']);
              else
                return Promise.resolve(new Cancha());
          }
       ).subscribe(cancha => this.cancha = cancha, err=>(this.msj = err)) //"No se pudo recuperar la cancha")
       console.log(this.cancha);
  }

  goBack(): void {
    this.location.back();
  }

  createField(): void {
    this.canchaService.altaCanchaService(this.cancha)
      .subscribe(resp =>this.router.navigate(['../reserva-cancha'], { relativeTo: this.route }),
      (res)=>{
        console.log('error');
        this.msj = res;
      });
  }

  deleteField(){
    this.canchaService.borrarCanchaService(this.cancha.id)
    .subscribe(resp => {
        this.router.navigate(['../../reserva-cancha'], { relativeTo: this.route });
    });
  }
  updateField(){
    this.canchaService.actualizarCanchaService(this.cancha)
      .subscribe(resp => {
          this.router.navigate(['../../reserva-cancha'], { relativeTo: this.route });
    });
  }
}
