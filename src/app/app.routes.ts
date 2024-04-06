import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registry', component: RegistroComponent}
];
