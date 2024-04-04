import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesAfiliacionComponent } from './planesAfiliacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanesAfiliacionComponent],
  exports:[PlanesAfiliacionComponent]
})
export class PlanesAfiliacionModule { }
