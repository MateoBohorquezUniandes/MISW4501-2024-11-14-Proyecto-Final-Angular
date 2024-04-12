/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SocioHomeComponent } from '../../socio/socio-home/socio-home.component';
import { DeportistaHomeComponent } from '../../deportista/deportista-home/deportista-home.component';
import { OrganizadorHomeComponent } from '../../organizador/organizador-home/organizador-home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let spy = jasmine.createSpyObj('LoginService', ['login', 'setToken']);
  let router: Router;

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'socios', component: SocioHomeComponent },{ path: 'deportista', component: DeportistaHomeComponent },{ path: 'organizador', component: OrganizadorHomeComponent }]),
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [{provide: LoginService, useValue: spy}],
      declarations: [LoginComponent],
    }).compileComponents();
    router = TestBed.inject(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ser valido el login', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');

    expect(component.loginForm.valid).toBeTrue();
  });

  it('Prueba metodo login, ingreso como socio', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');

    const data = {token: "fgdsdfgdgdsgs", rol:"SOCIO"};
    spy.login.and.returnValue(of(data));
    component.login(tipo_usuario.value, tipo_doc.value, documento.value, contrasena.value);
    expect(component.loginForm.valid).toBeTrue();
  });

  it('Prueba metodo login, ingreso como deportista', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');

    const data = {token: "fgdsdfgdgdsgs", rol:"DEPORTISTA"};
    spy.login.and.returnValue(of(data));
    component.login(tipo_usuario.value, tipo_doc.value, documento.value, contrasena.value);
    expect(component.loginForm.valid).toBeTrue();
  });

  it('Prueba metodo login, ingreso como organizador', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');

    const data = {token: "fgdsdfgdgdsgs", rol:"ORGANIZADOR"};
    spy.login.and.returnValue(of(data));
    component.login(tipo_usuario.value, tipo_doc.value, documento.value, contrasena.value);
    expect(component.loginForm.valid).toBeTrue();
  });

  it('Debe ser invalido el login, ya que el tipo de usuario es Seleccionar', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(0);
    tipo_doc.setValue(1);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('Debe ser invalido el login, ya que el tipo de documento es Tipo', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(0);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('Debe ser invalido el login, ya que el número de caracteres es bajo', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('3786');
    contrasena.setValue('mocos123');

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('Debe ser invalido el login, ya que el número de caracteres es alto', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('3786334534523453216789');
    contrasena.setValue('mocos123');

    expect(component.loginForm.invalid).toBeTrue();
  });

  // it('Debe ser invalido el login, ya que ingrese una letra en documento', () => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   const tipo_usuario = component.loginForm.controls['tipo_usuario'];
  //   const tipo_doc = component.loginForm.controls['tipo_doc'];
  //   const documento = component.loginForm.controls['documento'];
  //   const contrasena = component.loginForm.controls['contrasena'];
  //   tipo_usuario.setValue(1);
  //   tipo_doc.setValue(1);
  //   documento.setValue('3786A172');
  //   contrasena.setValue('mocos123');

  //   expect(component.loginForm.invalid).toBeTrue();
  // });

  it('Debe ser invalido el login, ya que no ingrese una contraseña', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('37864172');

    expect(component.loginForm.invalid).toBeTrue();
  });
});
