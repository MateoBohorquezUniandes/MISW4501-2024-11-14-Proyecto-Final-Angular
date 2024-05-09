import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilDemografico, Imc, Fisiologia, Demografia } from '../perfil_demografico';
import { PerfilesService } from '../perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { PerfilesModule } from '../perfiles.module';

@Component({
  standalone: true,
  imports:[RouterLink, CommonModule],
  selector: 'app-perfil-demografico',
  templateUrl: './demografico.component.html',
  styleUrls: ['./demografico.component.css']
})
export class PerfilDemograficoComponent implements OnInit {
  perfil!: PerfilDemografico;
  imc: Imc = new Imc("",0);
  fisiologia: Fisiologia = new Fisiologia(0,0,"",0);
  demografia: Demografia = new Demografia("","");
  centro:boolean = false;
  constructor(
    private perfilesService: PerfilesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getProfile()
  }

  getProfile(){
    this.perfilesService.getDemographicProfiles().subscribe(
      (perfil) => {
        if (perfil != undefined) {
          this.imc = perfil.data.clasificacion_riesgo.imc;
          this.fisiologia = perfil.data.fisiologia;
          this.demografia = perfil.data.demografia;
        }
      },
      (error) => {
        this.toastr.error('Error', 'Error al consultar el perfil:' + error);
      }
    );
  }
}
