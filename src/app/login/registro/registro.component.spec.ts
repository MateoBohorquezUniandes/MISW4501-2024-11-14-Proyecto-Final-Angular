/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [RegistroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ser valido el registro', () => {
    const nombre = component.registroForm.controls['nombre'];
    const apellido = component.registroForm.controls['apellido'];
    const tipo_doc = component.registroForm.controls['tipo_doc'];
    const documento = component.registroForm.controls['documento'];
    const contrasena = component.registroForm.controls['contrasena'];
    const contrasena2 = component.registroForm.controls['contrasena2'];
    const genero = component.registroForm.controls['genero'];
    const edad = component.registroForm.controls['edad'];
    const peso = component.registroForm.controls['peso'];
    const altura = component.registroForm.controls['altura'];
    const pais_nacimiento = component.registroForm.controls['pais_nacimiento'];
    const ciudad_nacimiento =
      component.registroForm.controls['ciudad_nacimiento'];
    const pais_vivienda = component.registroForm.controls['pais_vivienda'];
    const ciudad_vivienda = component.registroForm.controls['ciudad_vivienda'];
    const tiempo = component.registroForm.controls['tiempo'];
    const deporte = component.registroForm.controls['deporte'];
    nombre.setValue('Gustavo');
    apellido.setValue('Barbosa');
    tipo_doc.setValue(1);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');
    contrasena2.setValue('mocos123');
    genero.setValue(1);
    edad.setValue('36');
    peso.setValue('63');
    altura.setValue('180');
    pais_nacimiento.setValue('Brasil');
    ciudad_nacimiento.setValue('Sao Pablo');
    pais_vivienda.setValue('Colombia');
    ciudad_vivienda.setValue('Medellin');
    tiempo.setValue('9');
    deporte.setValue(1);

    expect(component.registroForm.valid).toBeTrue();

    let boton = debug.query(By.css('#boton_registro'));
    boton.nativeElement.click();
  });

  it('Debe ser invalido el registro por contraseñas inconsistentes', () => {
    const nombre = component.registroForm.controls['nombre'];
    const apellido = component.registroForm.controls['apellido'];
    const tipo_doc = component.registroForm.controls['tipo_doc'];
    const documento = component.registroForm.controls['documento'];
    const contrasena = component.registroForm.controls['contrasena'];
    const contrasena2 = component.registroForm.controls['contrasena2'];
    const genero = component.registroForm.controls['genero'];
    const edad = component.registroForm.controls['edad'];
    const peso = component.registroForm.controls['peso'];
    const altura = component.registroForm.controls['altura'];
    const pais_nacimiento = component.registroForm.controls['pais_nacimiento'];
    const ciudad_nacimiento =
      component.registroForm.controls['ciudad_nacimiento'];
    const pais_vivienda = component.registroForm.controls['pais_vivienda'];
    const ciudad_vivienda = component.registroForm.controls['ciudad_vivienda'];
    const tiempo = component.registroForm.controls['tiempo'];
    const deporte = component.registroForm.controls['deporte'];
    nombre.setValue('Gustavo');
    apellido.setValue('Barbosa');
    tipo_doc.setValue(1);
    documento.setValue('37864172');
    contrasena.setValue('mocos123');
    contrasena2.setValue('mocos1234');
    genero.setValue(1);
    edad.setValue('36');
    peso.setValue('63');
    altura.setValue('180');
    pais_nacimiento.setValue('Brasil');
    ciudad_nacimiento.setValue('Sao Pablo');
    pais_vivienda.setValue('Colombia');
    ciudad_vivienda.setValue('Medellin');
    tiempo.setValue('9');
    deporte.setValue(1);

    expect(component.registroForm.valid).toBeTrue();

    let boton = debug.query(By.css('#boton_registro'));
    boton.nativeElement.click();
  });

  it('Debe poder volver a login', () => {
    expect(debug.query(By.css('#boton_volver'))).toHaveSize(1);
    let boton = debug.query(By.css('#boton_volver'));
    boton.nativeElement.click();
  });
});
