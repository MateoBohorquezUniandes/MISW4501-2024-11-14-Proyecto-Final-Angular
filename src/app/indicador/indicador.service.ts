import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Formula } from './indicador';

@Injectable({
  providedIn: 'root',
})
export class IndicadorService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  createHeaders() {
    let token = window.sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    });
    return headers;
  }

  crearFormula(request: any): Observable<any> {
    let header = this.createHeaders();
    return this.http.post<string>(
      `${environment.UrlIndicador}/commands/formula`,
      request,
      { headers: header }
    );
  }

  getFormulas(): Observable<Formula[]> {
    let header = this.createHeaders();
    return this.http.get<Formula[]>(
      `${environment.UrlIndicador}/queries/formula`,
      {
        headers: header,
      }
    );
  }
}
