import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaHomeComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PerfilesModule } from './perfiles/perfiles.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PerfilesModule,
    DeportistaHomeComponent,
  ],
  exports: [PerfilesModule],
})
export class DeportistaModule {}
