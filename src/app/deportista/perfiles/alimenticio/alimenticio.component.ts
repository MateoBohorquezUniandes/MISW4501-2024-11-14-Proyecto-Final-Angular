import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-alimenticio',
  templateUrl: './alimenticio.component.html',
  styleUrls: ['./alimenticio.component.scss'],
})
export class PerfilAlimenticioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
