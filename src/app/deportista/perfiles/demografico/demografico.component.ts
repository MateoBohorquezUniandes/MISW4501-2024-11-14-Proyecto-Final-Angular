import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilDemografico, Imc, Fisiologia, Demografia, ReporteQuimico } from '../perfil_demografico';
import { PerfilesService } from '../perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { PerfilesModule } from '../perfiles.module';
import { FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports:[RouterLink, CommonModule, ReactiveFormsModule],
  selector: 'app-perfil-demografico',
  templateUrl: './demografico.component.html',
  styleUrls: ['./demografico.component.css']
})
export class PerfilDemograficoComponent implements OnInit {
  perfil!: PerfilDemografico;
  imc: Imc = new Imc("",0);
  fisiologia: Fisiologia = new Fisiologia(0,0,"",0);
  demografia: Demografia = new Demografia("","");
  reportes_sanguineos: Array<ReporteQuimico> = [];
  actualizar_datos:boolean = false;
  agregar_reporte:boolean = false;
  generalForm = this.formBuilder.group({
    genero: [0, [Validators.required, Validators.min(1)]],
    edad: ['',[Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    peso: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(3),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    altura: [
      '',
      [
        Validators.required,
      ],
    ],
    pais_vivienda: ['', [Validators.required]],
    ciudad_vivienda: ['', [Validators.required]],
  })
  reportesForm = this.formBuilder.group({
    tipo_examen:['',[Validators.required]],
    valor_examen:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
    unidad_examen:['',[Validators.required]],
  })
  constructor(
    private perfilesService: PerfilesService,
    private formBuilder: FormBuilder,
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
          this.reportes_sanguineos = perfil.data.reportes_sanguineo;
        }
      },
      (error) => {
        this.toastr.error('Error', 'Error al consultar el perfil:' + error);
      }
    );
  }
  form_actualizar(){
    this.actualizar_datos = true;
  }
  form_reporte(){
    this.agregar_reporte = true;
  }
  save_general(genero: number | null,
    edad: string | null,
    peso: string | null,
    altura: string | null,
    pais_vivienda: string | null,
    ciudad_vivienda: string | null){
    const request = {
      payload: {
        fisiologia:{
          peso: peso,
          altura: altura,
          genero: genero,
          edad: edad
        },
        demografia:{
          pais_residencia: pais_vivienda,
          ciudad_residencia: ciudad_vivienda
        }
      }
    }
    this.perfilesService.updateGeneralData(request).subscribe(
      (response) => {
        this.toastr.success('Se ha actualizado su perfil', 'Success');
        this.getProfile();
      },
      (error) => {
        this.toastr.error('Error al consultar el perfil:' + error.message, 'Error');
      }
    );
    this.actualizar_datos = false;
    this.generalForm.reset()
    this.getProfile();
  }

  save_chemical(
    tipo_examen:string | null,
    valor_examen:string | null,
    unidad_examen:string | null){
      const request = {
        resultado: {
          tipo_examen: tipo_examen,
          valor: valor_examen,
          unidad: unidad_examen
        }
      }
      this.perfilesService.addChemicalReport(request).subscribe(
        (response) => {
          this.toastr.success('Se ha actualizado su perfil', 'Success');
        },
        (error) => {
          this.toastr.error('Error al consultar el perfil:' + error.message, 'Error');
        }
      );
      this.agregar_reporte = false;
      this.reportesForm.reset()
      this.getProfile();
  }
}
