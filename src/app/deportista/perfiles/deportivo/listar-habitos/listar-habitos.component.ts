import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { Habito } from '../../perfil_deportivo';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[ CommonModule],
  selector: 'app-listar-habitos',
  templateUrl: './listar-habitos.component.html',
  styleUrls: ['./listar-habitos.component.css']
})
export class ListarHabitosComponent implements OnInit {
  @Input() habitos!: Array<Habito>;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  ngOnInit() {
  }

  selectHabit(event: any, habito: any) {
    let elem = this.el.nativeElement.querySelector(
      'ul#lista_habitos > li.active'
    );
    if (elem != null) {
      this.renderer.removeClass(elem, 'active');
      this.renderer.setAttribute(elem.querySelector('svg'), 'fill', '#5227cc');
    }
    this.renderer.addClass(event.target, 'active');
    this.renderer.setAttribute(
      event.target.querySelector('svg'),
      'fill',
      'white'
    );
  }

}
