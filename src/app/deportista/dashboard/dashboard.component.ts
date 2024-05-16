import { Component, OnInit } from '@angular/core';
import { ListarHabitosComponent } from '../perfiles/deportivo/listar-habitos/listar-habitos.component'
import { ListarMolestiasComponent } from '../perfiles/deportivo/listar-molestias/listar-molestias.component'
import { ListarEventosComponent} from '../dashboard/listar-eventos/listar-eventos.component'
import { Habito, Molestia, PerfilDeportivo } from '../perfiles/perfil_deportivo';
import { PerfilesService } from '../perfiles/perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Evento } from '../calendar/evento';
import { EventosService } from '../calendar/eventos.service';

@Component({
  standalone: true,
  imports: [ListarHabitosComponent, ListarMolestiasComponent, ListarEventosComponent],
  selector: 'app-deportista-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  perfil!: PerfilDeportivo;
  habitos = Array<Habito>();
  molestias = Array<Molestia>();
  /*eventos : Array<Evento> = [
    {
      distancia : 14,
      fecha: '2024-04-05',
      id: '6e44b228-ff8d-4d68-9ad8-85154ede4223',
      lugar: 'Bogota',
      nivel: 'Principiante',
      nombre: 'Carrera',
      tipo: 'Ciclismo'
    }
  ];*/
  eventos = Array<Evento>();
  constructor(
    private perfilesService: PerfilesService,
    private eventosService: EventosService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProfile();
    this.getEventos();
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

  getEventos(){
    this.eventosService.getAsociatedEvents(0).subscribe(
      (eventos) => {
        this.eventos = eventos;
      },
      (error) => {
        this.toastr.error('Error', 'Error al consultar el perfil:' + error);
      }
    );
  }
}
