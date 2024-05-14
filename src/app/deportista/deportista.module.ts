import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PerfilesModule } from './perfiles/perfiles.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PerfilesModule,
    DashboardComponent
  ],
  declarations: [],
  exports: [PerfilesModule]
})
export class DeportistaModule { }
