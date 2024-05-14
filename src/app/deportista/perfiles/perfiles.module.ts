import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearHabitoDeportivoComponent } from './deportivo/crear-habito-deportivo/crear-habito-deportivo.component';
import { CrearMolestiaComponent } from './deportivo/crear-molestia/crear-molestia.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ListarMolestiasComponent } from './deportivo/listar-molestias/listar-molestias.component';
import { ListarHabitosComponent } from './deportivo/listar-habitos/listar-habitos.component';

@NgModule({
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ListarHabitosComponent,
    ListarMolestiasComponent
  ],
  declarations: [CrearHabitoDeportivoComponent, CrearMolestiaComponent],
  exports: [CrearHabitoDeportivoComponent, CrearMolestiaComponent, ListarMolestiasComponent, ListarHabitosComponent],
})
export class PerfilesModule {}
