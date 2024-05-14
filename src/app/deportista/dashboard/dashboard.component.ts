import { Component, OnInit } from '@angular/core';
import { ListarHabitosComponent } from '../perfiles/deportivo/listar-habitos/listar-habitos.component'
import { ListarMolestiasComponent } from '../perfiles/deportivo/listar-molestias/listar-molestias.component'
import { Habito, Molestia, PerfilDeportivo } from '../perfiles/perfil_deportivo';
import { PerfilesService } from '../perfiles/perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [ListarHabitosComponent, ListarMolestiasComponent],
  selector: 'app-deportista-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  perfil!: PerfilDeportivo;
  habitos = Array<Habito>();
  molestias = Array<Molestia>();
  constructor(
    private perfilesService: PerfilesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProfile()
  }

  getProfile(){
    this.perfilesService.getSportProfiles().subscribe(
      (perfil) => {
        if (perfil != undefined) {
          this.habitos = perfil.data.habitos;
          this.molestias = perfil.data.molestias;
        }
      },
      (error) => {
        this.toastr.error('Error', 'Error al consultar el perfil:' + error);
      }
    );
  }
}
