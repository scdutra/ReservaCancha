import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent }       from './log-in/log-in.component';
import { RegistrateComponent }  from './registrate/registrate.component';
import { ReservaCanchaComponent} from './reserva-cancha/reserva-cancha.component';
import { IngresoComponent }   from './ingreso/ingreso.component';
import { UserComponent }        from './user/user.component';
import { CanchaDetalleComponent } from './cancha-detalle/cancha-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingreso/log-in', pathMatch: 'full' },
  { path: 'ingreso', component: IngresoComponent,
    children: [
        // { path: '', redirectTo: '/log-in', pathMatch: 'full' },
      { path: 'log-in',  component: LogInComponent },
      { path: 'registrate', component: RegistrateComponent },
    ]
  },
  { path: 'user/:id', component: UserComponent,
    children: [
      { path: 'reserva-cancha', component: ReservaCanchaComponent },
      { path: 'cancha-detalle', component: CanchaDetalleComponent },
      { path: 'cancha-detalle/:id', component: CanchaDetalleComponent },
    ]
  },
  { path: '**', redirectTo: '/ingreso/log-in'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
