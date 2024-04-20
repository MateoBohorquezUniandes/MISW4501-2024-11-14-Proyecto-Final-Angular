/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfilDeportivoComponent } from './perfil-deportivo.component';
import { ToastrModule } from 'ngx-toastr';
import { Habito, Molestia, PerfilDeportivo } from '../perfil_deportivo';
import { faker } from '@faker-js/faker';
import { PerfilesService } from '../perfiles.service';
import { of, throwError } from 'rxjs';
import { PerfilesModule } from '../perfiles.module';

describe('PerfilDeportivoComponent', () => {
  let component: PerfilDeportivoComponent;
  let fixture: ComponentFixture<PerfilDeportivoComponent>;
  let debug: DebugElement;
  let spy = jasmine.createSpyObj('PerfilesService', ['getSportProfiles']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PerfilDeportivoComponent,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        PerfilesModule,
      ],
      providers: [{ provide: PerfilesService, useValue: spy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDeportivoComponent);
    component = fixture.componentInstance;

    const habitos: Array<Habito> = [];
    habitos.push(
      new Habito(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    );

    habitos.push(
      new Habito(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    );

    const molestias: Array<Molestia> = [];
    for (var i = 1; i <= 7; i++) {
      molestias.push(
        new Molestia(
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        )
      );
    }

    component.perfil = new PerfilDeportivo(molestias, habitos);
    spy.getSportProfiles.and.returnValue(
      of(new PerfilDeportivo(molestias, habitos))
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir una opción para ir al perfil alimenticio', () => {
    expect(debug.queryAll(By.css('a#nav_alimenticio'))).toHaveSize(1);
    let element = debug.query(By.css('a#nav_alimenticio'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual(
      '/deportista/perfil-alimenticio'
    );
  });

  it('Debe existir una opción para ir al perfil demografico', () => {
    expect(debug.queryAll(By.css('a#nav_demografico'))).toHaveSize(1);
    let element = debug.query(By.css('a#nav_demografico'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual(
      '/deportista/perfil-demografico'
    );
  });

  it('Deben existir tres titulos', () => {
    expect(debug.queryAll(By.css('h5'))).toHaveSize(3);
  });

  it('Deben existir tres listas', () => {
    expect(debug.queryAll(By.css('ul'))).toHaveSize(3);
  });

  it('Cambio color item lista habitos', () => {
    let element = debug.query(By.css('ul#lista_habitos > li'));
    let children = element.query(By.css('svg'));
    expect(children.attributes['fill']).toEqual('#5227cc');
    expect(element.classes['active']).toBeFalsy();
    element.nativeElement.click();
    fixture.detectChanges();
    expect(element.classes['active']).toBeTruthy();
  });

  it('Cambio color item lista molestias', () => {
    let element = debug.query(By.css('ul#lista_molestias > li'));
    let children = element.query(By.css('svg'));
    expect(children.attributes['fill']).toEqual('#A85E5E');
    expect(element.classes['active']).toBeFalsy();
    element.nativeElement.click();
    fixture.detectChanges();
    expect(element.classes['active']).toBeTruthy();
  });

  /*it('Prueba del Scroll', () => {

  });*/

  it('Conteo items', () => {
    expect(debug.queryAll(By.css('ul#lista_molestias > li'))).toHaveSize(7);
  });

  it('Error servicio', () => {
    spy.getSportProfiles.and.returnValue(throwError({ status: 404 }));
  });
});
