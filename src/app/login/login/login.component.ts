import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CookieService],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  loginForm = this.formBuilder.group({
    tipo_usuario: [0, [Validators.required, Validators.min(1)]],
    tipo_doc: [0, [Validators.required, Validators.min(1)]],
    documento: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(20),
        //Validators.pattern('^[0-9]*$'),
      ],
    ],
    contrasena: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) {}

  login(
    tipo_usuario: number | null,
    tipo_doc: number | null,
    documento: string | null,
    contrasena: string | null
  ) {
    const user = {
      contrasena: contrasena,
      identificacion: {
        tipo: tipo_doc,
        valor: documento,
      },
      rol: tipo_usuario,
    };
    this.loginService.login(user).subscribe(
      (data) => {
        this.loginService.setToken(data.token);
        console.log(data);
        switch (data.rol) {
          case 'DEPORTISTA':
            this.router.navigateByUrl('/deportista');
            break;
          case 'SOCIO':
            this.router.navigateByUrl('/socios');
            break;
          case 'ORGANIZADOR':
            this.router.navigateByUrl('/organizador');
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        this.toastr.error('Error', 'Error al iniciar sesión:' + error);
      }
    );
  }
  ngOnInit() {}
}
