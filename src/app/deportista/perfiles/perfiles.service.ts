import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { PerfilDeportivo} from "./perfil_deportivo"

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private apiUrl = environment.UrlPerfiles + 'usuarios/login';
  constructor(private http:HttpClient, private cookies: CookieService) {}

  createHeaders(){
    const token = this.cookies.get("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers
  }

  getAllHabits(): Observable<PerfilDeportivo[]>{
    let header = this.createHeaders();
    return this.http.get<PerfilDeportivo[]>(this.apiUrl, { headers: header });
  }

  getAllDiscomforts(): Observable<PerfilDeportivo[]>{
    let header = this.createHeaders();
    return this.http.get<PerfilDeportivo[]>(this.apiUrl, { headers: header });
  }

}
