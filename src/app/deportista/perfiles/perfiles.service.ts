import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule, DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { CrearHabitoDTO, Habito, PerfilDeportivo } from './perfil_deportivo';
import { PerfilDemografico } from './perfil_demografico';
import { PerfilAlimenticio, ResponseAlimentos } from './perfil_alimenticio';

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

  getFoodProfiles(): Observable<PerfilAlimenticio> {
    let header = this.createHeaders();
    return this.http.get<PerfilAlimenticio>(this.apiUrl + '/queries/alimenticio', {
      headers: header,
    });
  }

  getFood():Observable<ResponseAlimentos> {
    let header = this.createHeaders();
    return this.http.get<ResponseAlimentos>(this.apiUrl + '/queries/alimentos', {
      headers: header,
    });
  }

  getDemographicProfiles(): Observable<PerfilDemografico> {
    let header = this.createHeaders();
    return this.http.get<PerfilDemografico>(this.apiUrl + '/queries/demografico', {
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

  asociarAlimento(request:any){
    let header = this.createHeaders();
    return this.http.post<string>(
      this.basePerfilUrl + '/commands/alimenticio/alimentos',
      request,
      { headers: header }
    );
  }

  registrarTipoAlimentacion(request:any){
    let header = this.createHeaders();
    return this.http.patch<string>(
      this.basePerfilUrl + '/commands/alimenticio/tipo',
      request,
      { headers: header }
    );
  }
}
