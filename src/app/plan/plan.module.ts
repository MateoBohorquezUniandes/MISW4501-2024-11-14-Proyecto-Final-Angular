import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './afiliaciones/afiliaciones.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PlanListComponent
  ],
  declarations: [
    PlanListComponent
  ]
})
export class PlanModule { }
