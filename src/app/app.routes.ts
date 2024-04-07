import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { PlanListComponent } from './plan/plan-list/plan-list.component';
import { DeportistaComponent } from './deportista/deportista.component';
import { SocioHomeComponent } from './socio/socio-home/socio-home.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo:'login' , pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registry', component: RegistroComponent },
  { path: 'plans', component: PlanListComponent},
  { path: 'deportista', component: DeportistaComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'socios', component: SocioHomeComponent }
    ]
  }
];
