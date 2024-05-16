/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ListarHabitosComponent } from '../perfiles/deportivo/listar-habitos/listar-habitos.component'
import { ListarMolestiasComponent } from '../perfiles/deportivo/listar-molestias/listar-molestias.component'
import { ListarEventosComponent} from '../dashboard/listar-eventos/listar-eventos.component'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { PerfilesService } from '../perfiles/perfiles.service';
import { EventosService } from '../calendar/eventos.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Habito, Molestia, PerfilDeportivo, PerfilDeportivoData } from '../perfiles/perfil_deportivo';
import { faker } from '@faker-js/faker';
import { of, throwError } from 'rxjs';
import { Evento } from '../calendar/evento';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debug: DebugElement;
  let spy = jasmine.createSpyObj('PerfilesService', ['getSportProfiles']);
  let spy2 = jasmine.createSpyObj('EventosService', ['getAsociatedEvents']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ListarHabitosComponent,
        ListarMolestiasComponent,
        ListarEventosComponent
       ],
       providers: [
        { provide: PerfilesService, useValue: spy },
        { provide: EventosService, useValue: spy2 },
        provideAnimations(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    const eventos: Array<Evento> = [];
    eventos.push(
      new Evento(
        10,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    )

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

    spy2.getAsociatedEvents.and.returnValue(
      of(eventos)
    )

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

  it('Error servicio', () => {
    spy2.getAsociatedEvents.and.returnValue(throwError(() => new Error("")));
    component.getEventos()
  });

});
