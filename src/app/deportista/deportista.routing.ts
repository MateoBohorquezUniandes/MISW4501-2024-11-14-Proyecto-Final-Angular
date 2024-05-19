import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'perfiles' , redirectTo:'perfiles/demografico' , pathMatch:'full'},
  {
    path: 'perfiles',
    children: [
      {
        path: 'alimenticio',
        loadComponent: () =>
          import('./perfiles/alimenticio/alimenticio.component').then(
            (c) => c.PerfilAlimenticioComponent
          ),
      },
      {
        path: 'demografico',
        loadComponent: () =>
          import('./perfiles/demografico/demografico.component').then(
            (c) => c.PerfilDemograficoComponent
          ),
      },
      {
        path: 'deportivo',
        loadComponent: () =>
          import('./perfiles/deportivo/deportivo.component').then(
            (c) => c.PerfilDeportivoComponent
          ),
      },
    ],
  },
  {path: 'suscripcion', component: SuscripcionComponent}
];
