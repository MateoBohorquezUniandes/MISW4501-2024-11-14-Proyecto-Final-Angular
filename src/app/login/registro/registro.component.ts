import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registroForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    tipo_doc: [0, [Validators.required, Validators.min(1)]],
    documento: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(20),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    contrasena: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ],
    ],
    contrasena2: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ],
    ],
    genero: [0, [Validators.required, Validators.min(1)]],
    edad: [
      '',
      [
        Validators.required,
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
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    pais_nacimiento: ['', [Validators.required]],
    ciudad_nacimiento: ['', [Validators.required]],
    pais_vivienda: ['', [Validators.required]],
    ciudad_vivienda: ['', [Validators.required]],
    tiempo: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    deporte: [0, [Validators.required, Validators.min(1)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) {}

  validarContrasena(){
      const control = this.registroForm.controls.contrasena;
      const matchingControl = this.registroForm.controls.contrasena2;
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
  }

  registrarse(
    nombre: string | null,
    apellido: string | null,
    tipo_doc: number | null,
    documento: string | null,
    contrasena: string | null,
    genero: number | null,
    edad: string | null,
    peso: string | null,
    altura: string | null,
    pais_nacimiento: string | null,
    ciudad_nacimiento: string | null,
    pais_vivienda: string | null,
    ciudad_vivienda: string | null,
    tiempo: string | null,
    deporte: number | null
  ) {
    this.validarContrasena()
    if(this.registroForm.controls.contrasena2.errors == null){
      const registro = {
        identificacion:{
          tipo: tipo_doc,
          valor: documento
        },
        nombre: nombre,
        apellido: apellido,
        rol: 'DEPORTISTA',
        contrasena: contrasena,
        demografia:{
          pais_nacimiento: pais_nacimiento,
          ciudad_nacimiento: ciudad_nacimiento,
          pais_residencia: pais_vivienda,
          ciudad_residencia: ciudad_vivienda,
          tiempo_residencia: tiempo,
          genero: genero,
          edad: edad,
          peso: peso,
          altura: altura,
        },
        deportes:[{deporte}]
      };
      this.loginService.registrarse(registro).subscribe(
        (data) => {
          this.router.navigateByUrl('/login');
        },
        (error) => {
          this.toastr.error(
            'Error',
            'Error registrando el usuario:' + error.message
          );
        }
      );
    }
  }

  public volver(){
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {}
}
