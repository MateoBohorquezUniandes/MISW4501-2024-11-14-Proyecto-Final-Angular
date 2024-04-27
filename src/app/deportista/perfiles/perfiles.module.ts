import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearHabitoDeportivoComponent } from './perfil-deportivo/crear-habito-deportivo/crear-habito-deportivo.component';
import { CrearMolestiaComponent } from './perfil-deportivo/crear-molestia/crear-molestia.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  declarations: [CrearHabitoDeportivoComponent, CrearMolestiaComponent],
  exports: [CrearHabitoDeportivoComponent, CrearMolestiaComponent],
})
export class PerfilesModule {}
