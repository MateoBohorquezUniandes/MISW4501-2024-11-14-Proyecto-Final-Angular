import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './login/registry/registry.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registry', component: RegistryComponent}
];
