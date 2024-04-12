import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-registry',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registroForm = this.formBuilder.group({
    nombre:['',[]],
    apellido: ['',[]],
    tipo_doc: [0, [Validators.required, Validators.min(1)]],
    documento: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(20),
      ],
    ],
    contrasena: ['', [Validators.required]],
    contrasena2: ['',[]],
    genero:['',[]],
    edad:['',[]],
    peso:['',[]],
    altura:['',[]],
    pais_nacimiento:['',[]],
    ciudad_nacimiento:['',[]],
    pais_vivienda:['',[]],
    ciudad_vivienda:['',[]],
    tiempo:['',[]],
    deporte:['',[]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) {}

  registrase(

  ){
    const registro = {

    };
    this.loginService.registrarse(registro).subscribe(
      data => {
        this.router.navigateByUrl("/login")
      },
    error => {
      this.toastr.error("Error", "Error registrando el usuario:" + error)
    });
  }

  ngOnInit() {}
}
