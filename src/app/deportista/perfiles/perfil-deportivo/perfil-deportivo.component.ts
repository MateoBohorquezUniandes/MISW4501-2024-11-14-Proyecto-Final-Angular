import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterLink],
  selector: 'app-perfil-deportivo',
  templateUrl: './perfil-deportivo.component.html',
  styleUrls: ['./perfil-deportivo.component.css']
})
export class PerfilDeportivoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
