import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { PlanListComponent } from './plan/afiliaciones/afiliaciones.component';
import { SocioHomeComponent } from './socio/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DeportistaHomeComponent } from './deportista/dashboard/dashboard.component';
import { OrganizadorHomeComponent } from './organizador/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'planes', component: PlanListComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'socios', component: SocioHomeComponent },
      {
        path: 'deportista',
        loadChildren: () =>
          import('./deportista/deportista.routing').then((r) => r.routes),
      },
      { path: 'organizador', component: OrganizadorHomeComponent },
    ],
  },
];
