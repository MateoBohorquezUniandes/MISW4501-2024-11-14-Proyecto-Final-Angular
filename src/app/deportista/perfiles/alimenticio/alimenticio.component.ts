import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule],
  selector: 'app-perfil-alimenticio',
  templateUrl: './alimenticio.component.html',
  styleUrls: ['./alimenticio.component.css']
})
export class PerfilAlimenticioComponent implements OnInit {
  alimentos: Array<any> = [{"titulo":"Carne de Res", "tipo":"Preferencias alimenticia"}];
  constructor(
  ) { }

  ngOnInit() {
  }

  selectHabit(event: any, alimento: any) {
  }
}
