import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
private baseUsuarioUrl = environment.UrlUsuarios;
constructor(private http:HttpClient) { }

  createHeaders() {
    const token = window.sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    });
    return headers;
  }

  changePlan(request:any){
    let header = this.createHeaders();
    return this.http.patch<string>(
      this.baseUsuarioUrl + '/commands/afiliacion',
      request,
      { headers: header }
    );
  }
}
