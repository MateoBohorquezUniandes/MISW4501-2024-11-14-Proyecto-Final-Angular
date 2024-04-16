import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterLink],
  selector: 'app-demografico',
  templateUrl: './demografico.component.html',
  styleUrls: ['./demografico.component.scss']
})
export class PerfilDemograficoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
