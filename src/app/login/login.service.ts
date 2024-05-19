import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.UrlUsuarios;
  constructor(private http:HttpClient, private cookies: CookieService
  ) {
  }

  createHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });
    return headers;
  }

  login(request: any): Observable<any> {
    let header = this.createHeaders();
    return this.http.post<string>(
      `${environment.UrlUsuarios}/commands/login`,
      request,
      { headers: header }
    );
  }
  setToken(token: string){
    //this.cookies.set("token", token, undefined,"/", document.location.host, true, 'Strict');
    window.sessionStorage.setItem("token", token);
  }
  getToken(){
    //return this.cookies.get("token")
    let token = window.sessionStorage.getItem("token");
    if (token != null){
      return token
    }
    return ""
  }
  registrarse(request: any): Observable<any>{
    let header = this.createHeaders();
    return this.http.post<string>(`${environment.UrlUsuarios}/commands/`, request ,{ headers: header });
  }
  deleteToken(){
    window.sessionStorage.removeItem("token");
  }

  getUser():Observable<Usuario>{
    let header = this.createHeaders();
    return this.http.get<Usuario>(this.apiUrl + '/queries', {
      headers: header,
    });
  }
}
