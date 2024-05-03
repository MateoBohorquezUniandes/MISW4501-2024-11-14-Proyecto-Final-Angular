import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterLink],
  selector: 'app-perfil-demografico',
  templateUrl: './demografico.component.html',
  styleUrls: ['./demografico.component.css']
})
export class PerfilDemograficoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
