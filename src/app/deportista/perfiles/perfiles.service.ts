import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { PerfilDeportivo } from './perfil_deportivo';

@Injectable({
  providedIn: 'root',
})
export class PerfilesService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  createHeaders() {
    const token = this.cookies.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return headers;
  }

  getPerfilDeportivo(): Observable<PerfilDeportivo> {
    let headers = this.createHeaders();
    return this.http.get<PerfilDeportivo>(
      `${environment.UrlPerfiles}/deportivo`,
      { headers }
    );
  }
}
