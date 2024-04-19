import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { CrearHabitoDTO, Habito, PerfilDeportivo } from './perfil_deportivo';
import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})
export class PerfilesService {
  private apiUrl = environment.UrlPerfiles + 'usuarios/login';
  private basePerfilUrl = environment.UrlPerfiles;
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

  createHabitoDeportivo(habitoDeportivoDto: CrearHabitoDTO): Observable<Habito> {
    let header = this.createHeaders();
    console.log(habitoDeportivoDto);
    return this.http.post<Habito>(
      this.basePerfilUrl + '/deportivo/habitos',
      habitoDeportivoDto,
      { headers: header }
    );
  }
}
