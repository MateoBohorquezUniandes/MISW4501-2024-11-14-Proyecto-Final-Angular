/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
    }).compileComponents();
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
    documento.setValue('37863345345234532');
    contrasena.setValue('mocos123');

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('Debe ser invalido el login, ya que ingrese una letra en documento', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const tipo_usuario = component.loginForm.controls['tipo_usuario'];
    const tipo_doc = component.loginForm.controls['tipo_doc'];
    const documento = component.loginForm.controls['documento'];
    const contrasena = component.loginForm.controls['contrasena'];
    tipo_usuario.setValue(1);
    tipo_doc.setValue(1);
    documento.setValue('3786A172');
    contrasena.setValue('mocos123');

    expect(component.loginForm.invalid).toBeTrue();
  });

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
