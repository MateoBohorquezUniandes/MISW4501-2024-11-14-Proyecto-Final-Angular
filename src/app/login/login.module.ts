import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent, RegistroComponent],
  exports: [
    LoginComponent,
    RegistroComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
