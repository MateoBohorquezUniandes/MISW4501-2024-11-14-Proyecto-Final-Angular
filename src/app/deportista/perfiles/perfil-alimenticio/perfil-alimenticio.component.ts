import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-perfil-alimenticio',
  templateUrl: './perfil-alimenticio.component.html',
  styleUrls: ['./perfil-alimenticio.component.css']
})
export class PerfilAlimenticioComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
