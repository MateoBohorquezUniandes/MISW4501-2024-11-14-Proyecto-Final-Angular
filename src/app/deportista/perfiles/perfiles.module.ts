import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilDeportivoComponent } from './perfil-deportivo/perfil-deportivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearHabitoDeportivoComponent } from './perfil-deportivo/crear-habito-deportivo/crear-habito-deportivo.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CrearHabitoDeportivoComponent],
  exports: [CrearHabitoDeportivoComponent],
})
export class PerfilesModule {}
