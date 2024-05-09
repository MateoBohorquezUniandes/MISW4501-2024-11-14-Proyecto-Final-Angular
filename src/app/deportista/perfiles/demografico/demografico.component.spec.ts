/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfilDemograficoComponent } from './demografico.component';
import { ToastrModule } from 'ngx-toastr';
import { ClasificacionRiesgo, Demografia, Fisiologia, Imc, PerfilDemografico, PerfilDemograficoData } from '../perfil_demografico';
import { of, throwError } from 'rxjs';
import { PerfilesService } from '../perfiles.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PerfilDemograficoComponent', () => {
  let component: PerfilDemograficoComponent;
  let fixture: ComponentFixture<PerfilDemograficoComponent>;
  let debug: DebugElement;
  let spy = jasmine.createSpyObj('PerfilesService', ['getDemographicProfiles']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PerfilDemograficoComponent,
        RouterTestingModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [
        {provide: PerfilesService, useValue: spy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDemograficoComponent);
    component = fixture.componentInstance;

    const clasificacion = new ClasificacionRiesgo(new Imc("Peso Normal",21.76))
    const fisiologia = new Fisiologia(1.8,30,"M",70.5)
    const demografia = new Demografia("Bogota","Colombia")
    const data = new PerfilDemografico(new PerfilDemograficoData(clasificacion,fisiologia,demografia),"")

    spy.getDemographicProfiles.and.returnValue(
      of(data)
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir una opción para ir al perfil alimenticio', () => {
    expect(debug.queryAll(By.css('a#nav_alimenticio'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_alimenticio'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfiles/alimenticio');
  });

  it('Debe existir una opción para ir al perfil deportivo', () => {
    expect(debug.queryAll(By.css('a#nav_deportivo'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_deportivo'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfiles/deportivo');
  });

  it('Debe existir un titulo', () => {
    expect(debug.queryAll(By.css('h5'))).toHaveSize(1)
  });

  it('Error servicio', () => {
    spy.getDemographicProfiles.and.returnValue(throwError(() => new Error("")));
    component.getProfile()
  });
});
