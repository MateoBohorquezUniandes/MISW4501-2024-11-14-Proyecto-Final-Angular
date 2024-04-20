/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrearHabitoDeportivoComponent } from './crear-habito-deportivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PerfilesService } from '../../perfiles.service';
import { Habito } from '../../perfil_deportivo';
import { of } from 'rxjs';
import { LoginService } from '../../../../login/login.service';

describe('CrearHabitoDeportivoComponent', () => {
  let component: CrearHabitoDeportivoComponent;
  let fixture: ComponentFixture<CrearHabitoDeportivoComponent>;
  let spy = jasmine.createSpyObj('PerfilesService', ['createHabitoDeportivo']);
  let spyLogin = jasmine.createSpyObj('LoginService', ['login', 'setToken']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        //RouterTestingModule.withRoutes([{ path: 'socios', component: SocioHomeComponent },{ path: 'deportista', component: DeportistaHomeComponent },{ path: 'organizador', component: OrganizadorHomeComponent }]),
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers: [
        { provide: PerfilesService, useValue: spy },
        { provide: LoginService, useValue: spyLogin },
      ],
      declarations: [CrearHabitoDeportivoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHabitoDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ser valido', () => {
    fixture = TestBed.createComponent(CrearHabitoDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const titulo = component.habitoForm.controls['titulo'];
    const frecuencia = component.habitoForm.controls['frecuencia'];
    const descripcion = component.habitoForm.controls['descripcion'];
    titulo.setValue('saltar la cuerda');
    frecuencia.setValue('Semanal');
    descripcion.setValue('saltar por 30 minutos');

    expect(component.habitoForm.valid).toBeTrue();
  });

  it('Prueba metodo crear habito deportivo', () => {
    fixture = TestBed.createComponent(CrearHabitoDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const titulo = component.habitoForm.controls['titulo'];
    const frecuencia = component.habitoForm.controls['frecuencia'];
    const descripcion = component.habitoForm.controls['descripcion'];
    titulo.setValue('saltar la cuerda');
    frecuencia.setValue(1);
    descripcion.setValue('saltar por 30 minutos');
    expect(component.habitoForm.valid).toBeTrue();
    const data = { token: 'blabla', rol: 'DEPORTISTA' };
    spyLogin.setToken.and.returnValue(of(data));
    const habit = new Habito(titulo.value, frecuencia.value, descripcion.value);
    spy.createHabitoDeportivo.and.returnValue(of(202));
    component.createHabitoDeportivoC(habit);
  });
});
