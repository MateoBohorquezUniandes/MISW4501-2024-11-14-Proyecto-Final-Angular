import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http:HttpClient, private cookies: CookieService) {}

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
    this.cookies.set("token", token, undefined,"/", document.location.host, true, 'Strict');
  }
  getToken(){
    return this.cookies.get("token");
  }
  registrarse(request: any): Observable<any>{
    let header = this.createHeaders();
    return this.http.post<string>(`${environment.UrlUsuarios}/commands/`, request ,{ headers: header });
  }
  deleteToken(){
    this.cookies.delete("token");
  }
}
