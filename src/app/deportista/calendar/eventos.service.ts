import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
private apiUrl = environment.UrlEventos;
constructor(private http: HttpClient) { }

  createHeaders() {
    const token = window.sessionStorage.getItem('token');
    console.log
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    });
    return headers;
  }

  getAsociatedEvents(programado:number): Observable<Array<Evento>> {
    let header = this.createHeaders();
    /*const params = {
      'programado': programado
    };*/
    return this.http.get<Array<Evento>>(this.apiUrl + '/queries/asociados?programado=' + programado, {
      headers: header
    });
  }
}
