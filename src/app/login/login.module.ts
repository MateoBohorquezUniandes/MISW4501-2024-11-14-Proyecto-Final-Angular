import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, RegistryComponent],
})
export class LoginModule {}
