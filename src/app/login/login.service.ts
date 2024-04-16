import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(request: any): Observable<any> {
    return this.http.post<string>(`${environment.UrlUsuarios}/login`, request);
  }
  setToken(token: string) {
    this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }
  registrarse(request: any): Observable<any> {
    return this.http.post<string>(`${environment.UrlUsuarios}/`, request);
  }
}
