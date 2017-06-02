import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrateComponent } from './registrate/registrate.component';

import { AppRoutingModule } from './app-routing.module';
import { ReservaCanchaComponent } from './reserva-cancha/reserva-cancha.component';
import { PersonaService }     from './services/persona.service';
import { CanchaService }             from './services/cancha.service';
import { IngresoComponent } from './ingreso/ingreso.component';
import { AuthenticationService } from './services/authentication.service';
import { MockAuthenticationService } from './services/mock-authentication.service';
import { UserComponent } from './user/user.component';

// used to create fake backend
import { BaseRequestOptions } from '@angular/http';
import { CanchaDetalleComponent } from './cancha-detalle/cancha-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrateComponent,
    ReservaCanchaComponent,
    IngresoComponent,
    UserComponent,
    CanchaDetalleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PersonaService,
    CanchaService,
    AuthenticationService,
    BaseRequestOptions,
    MockAuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
