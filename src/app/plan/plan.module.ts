import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './plan-list/plan-list.component';

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
