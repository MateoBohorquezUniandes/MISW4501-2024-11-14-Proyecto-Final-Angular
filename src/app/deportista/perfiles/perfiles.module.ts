import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilDeportivoComponent } from './deportivo/deportivo.component';

@NgModule({
  imports: [CommonModule, PerfilDeportivoComponent],
  //declarations: [PerfilDeportivoComponent],
  exports: [PerfilDeportivoComponent],
})
export class PerfilesModule {}
