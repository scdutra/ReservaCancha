import { Component, OnInit } from '@angular/core';
import { Cancha } from '../cancha';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CanchaService } from '../services/cancha.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {
cancha: Cancha;

  constructor(
    private canchaService: CanchaService,
    private route: ActivatedRoute,
    private location: Location,
    ) {
  }

  ngOnInit(): void {
    this.route.params
       .switchMap((params: Params) => this.canchaService.recuperarCanchaDetalle(+params['id']))
       .subscribe(cancha =>this.cancha = cancha)
  }

  goBack(): void {
    this.location.back();
  }

}
