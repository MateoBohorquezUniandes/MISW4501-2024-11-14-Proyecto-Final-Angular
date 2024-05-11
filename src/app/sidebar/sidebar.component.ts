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
import { environment } from '../../environments/environment';
import { Console } from 'console';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
    if($localize.locale == 'en') {
      this.english = true;
    }
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
    if(this.router.url.includes('?token=')){
      let urltoken = this.router.url.split('?token=')
      this.service.setToken(urltoken[1])
      let url = this.router.url.split('/')
      url = url[1].split('?')
      switch(url[0]){
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
    }
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

  changeLanguage(){
    if($localize.locale == 'en') {
      if(!this.router.url.includes('?token=')){
        let url = environment.UrlES + this.router.url + "?token=" + this.token;
        window.location.href = url
      }
      else{
        let url = environment.UrlES + this.router.url
        window.location.href = url
      }
    }
    else{
      if(!this.router.url.includes('?token=')){
        let url = environment.UrlEN + this.router.url + "?token=" + this.token;
        window.location.href = url
      }
      else{
        let url = environment.UrlEN + this.router.url
        window.location.href = url
      }
    }
  }
}
