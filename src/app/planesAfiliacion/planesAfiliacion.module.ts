import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesAfiliacionComponent } from './planesAfiliacion.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PlanesAfiliacionComponent],
  exports:[PlanesAfiliacionComponent]
})
export class PlanesAfiliacionModule { }
