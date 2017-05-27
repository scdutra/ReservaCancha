import { Component, OnInit } from '@angular/core';
import { Cancha } from '../cancha';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CanchaService } from '../services/cancha.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-cancha-detalle',
  templateUrl: './cancha-detalle.component.html',
  styleUrls: ['./cancha-detalle.component.css']
})
export class CanchaDetalleComponent implements OnInit {
cancha: Cancha;

  constructor(
    private canchaService: CanchaService,
    private route: ActivatedRoute,
    private location: Location,
    ) {
  }

  ngOnInit(): void {
    this.route.params
       .switchMap((params: Params) =>{
              if(params['id'])
                return this.canchaService.recuperarCanchaDetalle(+params['id']);
              else
                return Promise.resolve(new Cancha());
          }
       ).subscribe(cancha =>this.cancha = cancha)
  }

  goBack(): void {
    this.location.back();
  }

}
