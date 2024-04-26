import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearHabitoDeportivoComponent } from './perfil-deportivo/crear-habito-deportivo/crear-habito-deportivo.component';
import { CrearMolestiaComponent } from './perfil-deportivo/crear-molestia/crear-molestia.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CrearHabitoDeportivoComponent, CrearMolestiaComponent],
  exports: [CrearHabitoDeportivoComponent, CrearMolestiaComponent],
})
export class PerfilesModule {}
