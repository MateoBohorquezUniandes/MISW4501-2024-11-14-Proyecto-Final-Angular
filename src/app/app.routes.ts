import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './login/registry/registry.component';
import { CalendarComponent } from './deportist/calendar/calendar.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registry', component: RegistryComponent},
  { path: 'deportist/calendar', component: CalendarComponent}
];
