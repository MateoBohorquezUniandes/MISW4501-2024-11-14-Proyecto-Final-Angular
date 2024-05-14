/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ListarHabitosComponent } from '../perfiles/deportivo/listar-habitos/listar-habitos.component'
import { ListarMolestiasComponent } from '../perfiles/deportivo/listar-molestias/listar-molestias.component'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { PerfilesService } from '../perfiles/perfiles.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Habito, Molestia, PerfilDeportivo, PerfilDeportivoData } from '../perfiles/perfil_deportivo';
import { faker } from '@faker-js/faker';
import { of, throwError } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debug: DebugElement;
  let spy = jasmine.createSpyObj('PerfilesService', ['getSportProfiles']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ListarHabitosComponent,
        ListarMolestiasComponent
       ],
       providers: [
        { provide: PerfilesService, useValue: spy },
        provideAnimations(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
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
    const data: PerfilDeportivoData = new PerfilDeportivoData("","",molestias,habitos)

    component.perfil = new PerfilDeportivo(data,"");
    spy.getSportProfiles.and.returnValue(
      of(new PerfilDeportivo(data,""))
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Conteo items', () => {
    expect(debug.queryAll(By.css('ul#lista_molestias > li'))).toHaveSize(7);
  });

  it('Error servicio', () => {
    spy.getSportProfiles.and.returnValue(throwError(() => new Error("")));
    component.getProfile()
  });

});
