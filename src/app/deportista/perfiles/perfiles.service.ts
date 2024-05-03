import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule, DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { CrearHabitoDTO, Habito, PerfilDeportivo } from './perfil_deportivo';

@Injectable({
  providedIn: 'root',
})
export class PerfilesService {
  private apiUrl = environment.UrlPerfiles;
  private basePerfilUrl = environment.UrlPerfiles;
  constructor(private http: HttpClient, private cookies: CookieService) {
  }
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

  getSportProfiles(): Observable<PerfilDeportivo> {
    let header = this.createHeaders();
    return this.http.get<PerfilDeportivo>(this.apiUrl + '/queries/deportivo', {
      headers: header,
    });
  }

  getDemographicProfiles(): Observable<PerfilDeportivo> {
    let header = this.createHeaders();
    return this.http.get<PerfilDeportivo>(this.apiUrl + '/queries/demografico', {
      headers: header,
    });
  }

  createHabitoDeportivo(habitoDeportivoDto: any): Observable<any> {
    let header = this.createHeaders();
    return this.http.post<string>(
      this.basePerfilUrl + '/commands/deportivo/habitos',
      habitoDeportivoDto,
      { headers: header }
    );
  }

  createMolestia(molestiaDto: any): Observable<any> {
    let header = this.createHeaders();
    return this.http.post<string>(
      this.basePerfilUrl + '/commands/deportivo/molestias',
      molestiaDto,
      { headers: header }
    );
  }
}
