import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilesService } from '../../perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { MolestiaDTO, Molestia } from '../../perfil_deportivo';

import moment from 'moment';

@Component({
  selector: 'app-crear-molestia',
  templateUrl: './crear-molestia.component.html',
  styleUrls: ['./crear-molestia.component.css', '../../../../../styles.css'],
})
export class CrearMolestiaComponent implements OnInit {
  molestiaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private perfilesService: PerfilesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.molestiaForm = this.formBuilder.group({
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64),
        ],
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(400),
        ],
      ],
      fecha: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
  }

  createMolestia(crearMolestiaDto: Molestia): void {
    const molestiaPayload = new MolestiaDTO(
      crearMolestiaDto.titulo,
      crearMolestiaDto.fecha,
      crearMolestiaDto.descripcion,
      crearMolestiaDto.tipo
    );

    molestiaPayload.payload.fecha = moment(
      molestiaPayload.payload.fecha
    ).format('YYYY-MM-DD');

    this.perfilesService.createMolestia(molestiaPayload).subscribe(() => {
      this.toastr.success('Molestia Creada Satisfactoriamente', 'Molestia');
      this.molestiaForm.reset();
    });
  }
}
