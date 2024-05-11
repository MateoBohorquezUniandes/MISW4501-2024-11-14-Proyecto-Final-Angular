/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrearIndicadorComponent } from './crear-indicador.component';
import { Form, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { IndicadorService } from '../indicador.service';
import { Formula, Parametro } from '../indicador';
import { LoginService } from '../../login/login.service';
import { of } from 'rxjs';
import { parallel } from '@angular/cdk/testing';

describe('CrearIndicadorComponent', () => {
  let component: CrearIndicadorComponent;
  let fixture: ComponentFixture<CrearIndicadorComponent>;
  let spy = jasmine.createSpyObj('IndicadorService', [
    'crearFormula',
    'getFormulas',
  ]);
  let spyLogin = jasmine.createSpyObj('LoginService', ['login', 'setToken']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers: [
        { provide: IndicadorService, useValue: spy },
        { provide: LoginService, useValue: spyLogin },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearIndicadorComponent);
    component = fixture.componentInstance;
    const parametro = new Parametro('12', 'x+c', 'ritmo', 'y');
    const parametros: Parametro[] = [];
    parametros.push(parametro);
    const formula = new Formula('123', 'test', 'test', 'x+y', parametros);
    component.formulas.push(formula);

    const formulas: Formula[] = [formula];
    spy.getFormulas.and.returnValue(of(formulas));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba crear formula', () => {
    fixture = TestBed.createComponent(CrearIndicadorComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    const nombre = component.indicadorForm.controls.nombre;
    const formula = component.indicadorForm.controls.formula;
    const descripcion = component.indicadorForm.controls.descripcion;
    nombre.setValue('mi formula');
    formula.setValue('x + y**3');
    descripcion.setValue('formula test');
    expect(component.indicadorForm.valid).toBeTrue();
    const data = { token: 'blabla', rol: 'DEPORTISTA' };
    spyLogin.setToken.and.returnValue(of(data));
    const newRow = {
      id: Date.now(),
      nombre: 'ritmo',
      simbolo: 'y',
      funcion: 'max',
      isEdit: false,
    };
    component.dataSource.push(newRow);
    spy.crearFormula.and.returnValue(of(201));

    component.createIndicador(nombre.value, descripcion.value, formula.value);
  });
});
