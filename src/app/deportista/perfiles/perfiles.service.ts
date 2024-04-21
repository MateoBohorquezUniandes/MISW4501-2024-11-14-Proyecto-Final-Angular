import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { CrearHabitoDTO, Habito, PerfilDeportivo } from './perfil_deportivo';

@Injectable({
  providedIn: 'root',
})
export class PerfilesService {
  private apiUrl = environment.UrlPerfilesCommand + 'usuarios/login';
  private basePerfilUrl = environment.UrlPerfilesCommand;
  constructor(private http: HttpClient, private cookies: CookieService) {}

  createHeaders() {
    const token = this.cookies.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return headers;
  }

  getSportProfiles(): Observable<PerfilDeportivo> {
    let header = this.createHeaders();
    return this.http.get<PerfilDeportivo>(this.apiUrl, { headers: header });
  }

  createHabitoDeportivo(habitoDeportivoDto: any): Observable<any> {
    let header = this.createHeaders();
    console.log(habitoDeportivoDto);
    return this.http.post<string>(
      this.basePerfilUrl + '/deportivo/habitos',
      habitoDeportivoDto,
      { headers: header }
    );
  }
}
