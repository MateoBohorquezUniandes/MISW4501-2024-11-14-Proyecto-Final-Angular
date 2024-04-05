import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent, RegistryComponent],
  exports: [
    LoginComponent,
    RegistryComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
