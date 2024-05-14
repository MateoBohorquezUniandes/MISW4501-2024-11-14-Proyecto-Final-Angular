import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { Molestia } from '../../perfil_deportivo';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[ CommonModule],
  selector: 'app-listar-molestias',
  templateUrl: './listar-molestias.component.html',
  styleUrls: ['./listar-molestias.component.css']
})
export class ListarMolestiasComponent implements OnInit {
  @Input() molestias!: Array<Molestia>;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  ngOnInit() {
  }

  selectMolestia(event: any, molestia: any) {
    let elem = this.el.nativeElement.querySelector(
      'ul#lista_molestias > li.active'
    );
    if (elem != null) {
      this.renderer.removeClass(elem, 'active');
      this.renderer.setAttribute(elem.querySelector('svg'), 'fill', '#A85E5E');
    }
    this.renderer.addClass(event.target, 'active');
    this.renderer.setAttribute(
      event.target.querySelector('svg'),
      'fill',
      'white'
    );
  }

}
