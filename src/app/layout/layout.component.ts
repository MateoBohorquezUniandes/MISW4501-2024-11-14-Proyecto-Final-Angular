import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LoginService } from '../login/login.service';
import { options } from './options'
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  options: Array<any> = [];
  english: boolean = false;
  user: string = '';
  token: string = '';

  constructor( public router: Router,
               private service: LoginService,
               private toastr: ToastrService,) {
  }

  ngOnInit() {
    let url = this.router.url.split('/')
    switch(url[1]){
      case 'deportista':
        this.options = options.optionsDeportista
        break;
      case 'socio':
        this.options = options.optionsSocio
        break;
      case 'organizador':
        this.options = options.optionsOrganizador
        break;
    }
    //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMzMxMjYxNCwianRpIjoiMTk2ODc2YWYtNDFhNy00YjI4LThlM2ItYTZmMmViYWE1YjlhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ0aXBvIjoiQ0MiLCJ2YWxvciI6IjEyMzQ1Njc4OSJ9LCJuYmYiOjE3MTMzMTI2MTQsImNzcmYiOiJlZWYxOGEzMC1lMzgyLTRiOTItYjlhOS02ZjJlZjdiYjgzZWMiLCJleHAiOjE3MTMzMzc4MTR9.OAq6ifrIhmXtflYzgEG1wd5r1kiUTfSn-y4DlH_RcDA";
    this.token = this.service.getToken();
    if(this.token != ''){
      const helper = new JwtHelperService();
      let decoded = helper.decodeToken(this.token);
      this.user = decoded.sub.valor;
    }
    else {
      this.toastr.error("Token is null", "Error token:");
      this.user = "User";
    }
  }
  signOut(){
    this.service.deleteToken();
    this.router.navigateByUrl("/login")
  }
}
