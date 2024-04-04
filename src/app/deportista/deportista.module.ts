import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaComponent } from './deportista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DeportistaComponent]
})
export class DeportistaModule { }
