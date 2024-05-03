import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[RouterLink, CommonModule],
  selector: 'app-perfil-demografico',
  templateUrl: './demografico.component.html',
  styleUrls: ['./demografico.component.css']
})
export class PerfilDemograficoComponent implements OnInit {
  centro:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
