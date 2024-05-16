import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../../calendar/evento';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.css']
})
export class ListarEventosComponent implements OnInit {
  @Input() eventos!: Array<Evento>;
  constructor() { }

  ngOnInit() {

  }

}
