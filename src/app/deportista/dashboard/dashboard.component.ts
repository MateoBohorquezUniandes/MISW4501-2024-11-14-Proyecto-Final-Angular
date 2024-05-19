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
import { LoginService } from '../../login/login.service';
import { Usuario } from '../../login/usuario';

@Component({
  standalone: true,
  imports: [ListarHabitosComponent, ListarMolestiasComponent, ListarEventosComponent, CommonModule],
  selector: 'app-deportista-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  perfil!: PerfilDeportivo;
  habitos = Array<Habito>();
  molestias = Array<Molestia>();
  usuario!: Usuario;
  subscripcion:string = '';
  eventos = Array<Evento>();
  constructor(
    private perfilesService: PerfilesService,
    private loginService: LoginService,
    private eventosService: EventosService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProfile();
    this.getEventos();
    this.getUser();
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

  getUser(){
    this.loginService.getUser().subscribe(
      (usuario) => {
        this.usuario = usuario;
        this.subscripcion = usuario.plan_afiliacion;
      },
      (error) => {
        this.toastr.error('Error al consultar la información del usuario' + error.message,'Error');
      }
    );
  }
}
