import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Habito} from './habito';
import { Molestia } from './molestia';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private apiUrl = environment.baseUrl + 'usuarios/login';
  constructor(private http:HttpClient, private cookies: CookieService) {}

  createHeaders(){
    const token = this.cookies.get("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers
  }

  getAllHabits(): Observable<Habito[]>{
    let header = this.createHeaders();
    return this.http.get<Habito[]>(this.apiUrl, { headers: header });
  }

  getAllDiscomforts(): Observable<Molestia[]>{
    let header = this.createHeaders();
    return this.http.get<Molestia[]>(this.apiUrl, { headers: header });
  }

}
