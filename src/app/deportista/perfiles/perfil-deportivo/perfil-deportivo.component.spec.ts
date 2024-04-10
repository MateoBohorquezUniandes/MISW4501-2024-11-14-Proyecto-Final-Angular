/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PerfilDeportivoComponent } from './perfil-deportivo.component';

describe('PerfilDeportivoComponent', () => {
  let component: PerfilDeportivoComponent;
  let fixture: ComponentFixture<PerfilDeportivoComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PerfilDeportivoComponent, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir una opción para ir al perfil alimenticio', () => {
    expect(debug.queryAll(By.css('a#nav_alimenticio'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_alimenticio'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfil-alimenticio');
  });

  it('Debe existir una opción para ir al perfil demografico', () => {
    expect(debug.queryAll(By.css('a#nav_demografico'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_demografico'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfil-demografico');
  });

  it('Debe existir un titulo', () => {
    expect(debug.queryAll(By.css('h5'))).toHaveSize(1)
  });
});
