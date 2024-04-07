import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaHomeComponent } from './deportista-home/deportista-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DeportistaHomeComponent]
})
export class DeportistaModule { }
