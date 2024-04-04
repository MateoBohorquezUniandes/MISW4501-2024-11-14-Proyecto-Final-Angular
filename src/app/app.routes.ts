import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './login/registry/registry.component';
import { PlanesAfiliacionComponent } from './planesAfiliacion/planesAfiliacion.component';
import { DeportistaComponent } from './deportista/deportista.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registry', component: RegistryComponent},
  { path:'planesafiliacion', component: PlanesAfiliacionComponent},
  { path:'deportista', component: DeportistaComponent}
];
