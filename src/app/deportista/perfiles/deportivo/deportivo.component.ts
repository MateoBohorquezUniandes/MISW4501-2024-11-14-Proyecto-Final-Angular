import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilDeportivo, Habito, Molestia } from '../perfil_deportivo';
import { PerfilesService } from '../perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { PerfilesModule } from '../perfiles.module';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule, PerfilesModule],
  selector: 'app-perfil-deportivo',
  templateUrl: './deportivo.component.html',
  styleUrls: ['./deportivo.component.css'],
})
export class PerfilDeportivoComponent implements OnInit {
  perfil!: PerfilDeportivo;
  habitos = Array<Habito>();
  molestias = Array<Molestia>();
  //habitos =[{titulo: "itemA"},{titulo: "itemB"},{titulo: "itemC"},{titulo: "itemC"},{titulo: "itemC"}]
  //molestias =[{titulo: "itemA"},{titulo: "itemB"},{titulo: "itemC"},{titulo: "itemD"},{titulo: "itemE"},{titulo: "itemF"}]

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
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
