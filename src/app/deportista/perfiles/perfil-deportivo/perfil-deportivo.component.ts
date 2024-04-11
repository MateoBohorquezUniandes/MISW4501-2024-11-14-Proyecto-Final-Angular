import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[RouterLink, CommonModule],
  selector: 'app-perfil-deportivo',
  templateUrl: './perfil-deportivo.component.html',
  styleUrls: ['./perfil-deportivo.component.css']
})

export class PerfilDeportivoComponent implements OnInit {

  habitos =[{titulo: "itemA"},{titulo: "itemB"},{titulo: "itemC"},{titulo: "itemD"},{titulo: "itemE"},{titulo: "itemF"}]
  molestias =[{titulo: "itemA"},{titulo: "itemB"},{titulo: "itemC"},{titulo: "itemD"},{titulo: "itemE"},{titulo: "itemF"}]
  //habitos =[{titulo: "itemA"},{titulo: "itemB"},{titulo: "itemC"},{titulo: "itemC"},{titulo: "itemC"}]

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    //this.habitos = ge
  }

  selectHabit(event:any, habito: any){
    let elem = this.el.nativeElement.querySelector("ul#lista_habitos > li.active");
    if(elem != null){
      this.renderer.removeClass(elem, 'active');
      this.renderer.setAttribute(elem.querySelector("svg"),"fill", "#5227cc");
    }
    this.renderer.addClass(event.target, 'active');
    this.renderer.setAttribute(event.target.querySelector("svg"),"fill", "white");
  }

  selectMolestia(event:any, molestia: any){
    let elem = this.el.nativeElement.querySelector("ul#lista_molestias > li.active");
    if(elem != null){
      this.renderer.removeClass(elem, 'active');
      this.renderer.setAttribute(elem.querySelector("svg"),"fill", "#A85E5E");
    }
    this.renderer.addClass(event.target, 'active');
    this.renderer.setAttribute(event.target.querySelector("svg"),"fill", "white");
  }

}
