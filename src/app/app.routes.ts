import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { PlanListComponent } from './plan/plan-list/plan-list.component';
import { DeportistaComponent } from './deportista/deportista.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registry', component: RegistroComponent },
  { path: 'plans', component: PlanListComponent},
  { path: 'deportista', component: DeportistaComponent }
];
