import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { PlanListComponent } from './plan/plan-list/plan-list.component';
import { SocioHomeComponent } from './socio/socio-home/socio-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './deportista/dashboard/dashboard.component';
import { OrganizadorHomeComponent } from './organizador/organizador-home/organizador-home.component';
import { CrearIndicadorComponent } from './indicador/crear-indicador/crear-indicador.component';
import { PlanSuscriberComponent } from './plan/plan-suscriber/plan-suscriber.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistroComponent },

  //{ path: 'deportista', component: DeportistaHomeComponent },
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'socios', component: SocioHomeComponent },
      {
        path: 'deportista',
        loadChildren: () =>
          import('./deportista/deportista.routing').then((r) => r.routes),
      },
      { path: 'organizador', component: OrganizadorHomeComponent },
      { path: 'indicadores', component: CrearIndicadorComponent },
    ],
  },
  { path: 'planes', component: PlanListComponent },
  { path: 'subscribe', component: PlanSuscriberComponent},
];
