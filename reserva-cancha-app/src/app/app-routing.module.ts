import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent }       from './log-in/log-in.component';
import { RegistrateComponent }  from './registrate/registrate.component';
import { ReservaCanchaComponent} from './reserva-cancha/reserva-cancha.component';
import { FirstViewComponent }   from './first-view/first-view.component';
import { UserComponent }        from './user/user.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-first-view/log-in', pathMatch: 'full' },
  { path: 'app-first-view', component: FirstViewComponent,
    children: [
        // { path: '', redirectTo: '/log-in', pathMatch: 'full' },
      { path: 'log-in',  component: LogInComponent },
      { path: 'registrate', component: RegistrateComponent },
    ]
  },
  { path: 'user/:id', component: UserComponent,
    children: [
      { path: 'reserva-cancha', component: ReservaCanchaComponent },
      { path: 'cancha-detalle', component: FieldDetailComponent },
      { path: 'cancha-directo/:id', component: FieldDetailComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
