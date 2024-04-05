import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /*rol: string;
  tipo_identificación: string;
  identificacion: string;
  contraseña: string;*/

  //loginForm!: FormGroup;
  loginForm = this.formBuilder.group({
    tipo_usuario: [0, [Validators.required, Validators.min(1)]],
    tipo_doc: [0, [Validators.required, Validators.min(1)]],
    documento: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(11),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    contrasena: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {}

  login(
    tipo_usuario: number | null,
    tipo_doc: number | null,
    documento: string | null,
    contraseña: string | null
  ) {
    /*switch(tipo_usuario){
      case 1:
        tipo_usuario = "Deportista";
      case
    }*/
    const user = {
      rol: tipo_usuario,
      tipo_identificacion: tipo_doc,
      identificación: documento,
      contraseña: contraseña,
    };
    console.log('rol:' + tipo_usuario);
    console.log('tipo_identificacion:' + tipo_doc);
    console.log('identificación:' + documento);
    console.log('contraseña:' + contraseña);
    this.toastr.error("Error", "System not configured")
    /*this.loginService.login(user).subscribe(
      data => {
        this.loginService.setToken(data.token);
        switch(){
          case 1:
            algo para redirect
        },
      error => {
      console.log(error);
    });*/

  }
  ngOnInit() {
    /*this.loginForm = this.formBuilder.group({
      tipo_usuario:["",[Validators.required]],
      tipo_doc:["",[Validators.required]],
      documento:["",[Validators.required]],
      contrasena:["",[Validators.required]]
    })*/
  }
}
