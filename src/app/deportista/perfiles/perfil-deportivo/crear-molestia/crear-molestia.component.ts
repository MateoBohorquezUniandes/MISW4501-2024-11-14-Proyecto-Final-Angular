import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilesService } from '../../perfiles.service';
import { ToastrService } from 'ngx-toastr';
import { CrearHabitoDTO, Habito } from '../../perfil_deportivo';

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
      frecuencia: [
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
    });
  }

  createHabitoDeportivoC(creahabitodeportivoDto: Habito): void {
    const habitoPayload = new CrearHabitoDTO(
      creahabitodeportivoDto.titulo,
      creahabitodeportivoDto.frecuencia,
      creahabitodeportivoDto.descripcion
    );
    this.perfilesService.createHabitoDeportivo(habitoPayload).subscribe(() => {
      this.toastr.success('Habito Creado Satisfactoriamente', 'Habito');
      this.molestiaForm.reset();
    });
  }
}
