import { Component, OnInit } from '@angular/core';
import { Jugador }           from '../jugador';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Hola ';
  persona: Jugador;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) { }

  ngOnInit() {
    this.persona = JSON.parse(localStorage.getItem('currentUser'));
  }

  logOutButton() {
    this.authenticationService.logout();
  }
}
