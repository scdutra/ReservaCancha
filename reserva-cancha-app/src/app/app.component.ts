import { Component, OnInit } from '@angular/core';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RouterModule, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){

  }

  ngOnInit(){
    // this.router.navigate(['/app-first-view']);
  }

}
