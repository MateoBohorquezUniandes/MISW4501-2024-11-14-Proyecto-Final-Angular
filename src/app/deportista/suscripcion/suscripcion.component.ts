import { Component, OnInit } from '@angular/core';
import { FreeComponent } from '../../plan/cards/free/free.component';
import { IntermediumComponent } from '../../plan/cards/intermedium/intermedium.component'
import { PremiumComponent} from '../../plan/cards/premium/premium.component'
import { CommonModule } from '@angular/common';
import { LoginService } from '../../login/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  standalone: true,
  imports:[FreeComponent,IntermediumComponent,PremiumComponent, CommonModule],
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  subscripcion: string = '';
  constructor(
    private loginService: LoginService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.loginService.getUser().subscribe(
      (usuario) => {
        this.subscripcion = usuario.plan_afiliacion;
      },
      (error) => {
        this.toastr.error('Error al consultar la información del usuario' + error.message,'Error');
      }
    );
  }
}
