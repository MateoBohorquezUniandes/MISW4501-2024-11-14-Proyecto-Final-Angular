import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.baseUrl + 'login';
  constructor(private http:HttpClient) {}

  login(request: any): Observable<string> {
    return this.http.post<string>(this.apiUrl,request)
  }
}
