/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { PerfilAlimenticioComponent } from './alimenticio.component';
import { PerfilesService } from '../perfiles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Alimento, PerfilAlimenticio, PerfilAlimenticioData, ResponseAlimentos } from '../perfil_alimenticio';
import { of, throwError } from 'rxjs';

describe('PerfilAlimenticioComponent', () => {
  let component: PerfilAlimenticioComponent;
  let fixture: ComponentFixture<PerfilAlimenticioComponent>;
  let debug: DebugElement;
  let spy = jasmine.createSpyObj('PerfilesService', ['getFoodProfiles','getFood','asociarAlimento', 'registrarTipoAlimentacion']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PerfilAlimenticioComponent,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers:[ {provide: PerfilesService, useValue: spy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const alimentos : Array<Alimento> = [];

    alimentos.push(new Alimento("","","Pollo",""));

    const data = new PerfilAlimenticioData(alimentos,"123456789","","CC")
    const response = new PerfilAlimenticio(data,"")
    spy.getFoodProfiles.and.returnValue(of(response))

    const alimentos2 : Array<Alimento> = [];

    alimentos2.push(new Alimento("","","Pollo",""));
    alimentos2.push(new Alimento("","","Tomate",""));

    const response2 = new ResponseAlimentos(alimentos2,"")
    spy.getFood.and.returnValue(of(response2));

    fixture = TestBed.createComponent(PerfilAlimenticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir una opción para ir al perfil demografico', () => {
    expect(debug.queryAll(By.css('a#nav_demografico'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_demografico'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfiles/demografico');
  });

  it('Debe existir una opción para ir al perfil deportivo', () => {
    expect(debug.queryAll(By.css('a#nav_deportivo'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_deportivo'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfiles/deportivo');
  });

  it('Debo poder usar el buscador', () => {
    let boton = debug.query(By.css('button.form-select.campo_n'));
    boton.nativeElement.click();
    fixture.detectChanges();
    let buscador = debug.query(By.css('input.form-control.mr-sm-2'));
    const event = new KeyboardEvent('keyup', { bubbles : true, cancelable : true, shiftKey : false});
    buscador.nativeElement.value = "To";
    buscador.nativeElement.dispatchEvent(event);
    fixture.detectChanges();
    buscador.nativeElement.value = "";
    buscador.nativeElement.dispatchEvent(event);
    fixture.detectChanges();
  });

  it('Debo poder registrar un alimento', () => {
    const event = new KeyboardEvent('click', { bubbles : true, cancelable : true, shiftKey : false});
    const alimento = new Alimento("","","Pollo","");
    component.selectAlimento(event, alimento)
    expect(component.selectedAlimento).toEqual(alimento);
    const nombre = component.alimentoForm.controls['tipo'];
    nombre.setValue(1);
    let boton = debug.query(By.css('button#submit-alimento'));
    spy.asociarAlimento.and.returnValue(of(202))
    boton.nativeElement.click();
  });

  it('Evaluar toque',() => {
    const event = new KeyboardEvent('click', { bubbles : true, cancelable : true, shiftKey : false});
    const alimento = new Alimento("","","Seleccionar","");
    component.selectAlimento(event, alimento)
    expect(component.selectedAlimento).toEqual(alimento);
    const nombre = component.alimentoForm.controls['tipo'];
    nombre.setValue(1);
    let boton = debug.query(By.css('button#submit-alimento'));
    spy.asociarAlimento.and.returnValue(of(202))
    boton.nativeElement.click();
  });

  it('Debo poder registrar tipo alimentación', () => {
    const nombre = component.preferenciaForm.controls['tipo'];
    nombre.setValue(1);
    let boton = debug.query(By.css('button#submit-tipo'));
    spy.registrarTipoAlimentacion.and.returnValue(of(202))
    boton.nativeElement.click();
  });

  it('Debe existir un titulo', () => {
    expect(debug.queryAll(By.css('h5'))).toHaveSize(1)
  });

  it('Error servicio getProfile', () => {
    spy.getFoodProfiles.and.returnValue(throwError(() => new Error("")));
    component.getProfile()
  });

  it('Error servicio getFood', () => {
    spy.getFood.and.returnValue(throwError(() => new Error("")));
    component.getAlimentos()
  });
});
