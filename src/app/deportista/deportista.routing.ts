import { Routes, RouterModule } from '@angular/router';
import { DeportistaHomeComponent } from './deportista-home/deportista-home.component';

export const routes: Routes = [
  { path: '', component: DeportistaHomeComponent },
  //{ path: 'perfil-alimenticio', loadChildren: () => import('./perfiles/perfiles.module').then( m => m.PerfilesModule),},
  //{ path: 'perfil-demografico', loadChildren: () => import('./perfiles/perfiles.module').then( m => m.PerfilesModule),},
  //{ path: 'perfil-deportivo', loadChildren: () => import('./perfiles/perfiles.module').then( m => m.PerfilesModule),},
  { path: 'perfil-alimenticio', loadComponent: () => import('./perfiles/perfil-alimenticio/perfil-alimenticio.component').then( c => c.PerfilAlimenticioComponent),},
  { path: 'perfil-demografico', loadComponent: () => import('./perfiles/perfil-demografico/perfil-demografico.component').then( c => c.PerfilDemograficoComponent),},
  { path: 'perfil-deportivo', loadComponent: () => import('./perfiles/perfil-deportivo/perfil-deportivo.component').then( c => c.PerfilDeportivoComponent),},
];
