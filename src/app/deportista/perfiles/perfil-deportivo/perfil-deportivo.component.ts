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
  templateUrl: './perfil-deportivo.component.html',
  styleUrls: ['./perfil-deportivo.component.css'],
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
    this.getProfile();
    if (this.perfil != null) {
      this.habitos = this.perfil.habitos;
      this.molestias = this.perfil.molestias;
    }

  }

  getProfile() {
    this.perfilesService.getSportProfiles().subscribe(
      (perfil) => {
        this.perfil = perfil;
      },
      (error) => {
        this.toastr.error('Error', 'Error al consultar el perfil:' + error);
      }
    );
  }

  selectHabit(event: any, habito: any) {
    let elem = this.el.nativeElement.querySelector(
      'ul#lista_habitos > li.active'
    );
    if (elem != null) {
      this.renderer.removeClass(elem, 'active');
      this.renderer.setAttribute(elem.querySelector('svg'), 'fill', '#5227cc');
    }
    this.renderer.addClass(event.target, 'active');
    this.renderer.setAttribute(
      event.target.querySelector('svg'),
      'fill',
      'white'
    );
  }

  selectMolestia(event: any, molestia: any) {
    let elem = this.el.nativeElement.querySelector(
      'ul#lista_molestias > li.active'
    );
    if (elem != null) {
      this.renderer.removeClass(elem, 'active');
      this.renderer.setAttribute(elem.querySelector('svg'), 'fill', '#A85E5E');
    }
    this.renderer.addClass(event.target, 'active');
    this.renderer.setAttribute(
      event.target.querySelector('svg'),
      'fill',
      'white'
    );
  }
}