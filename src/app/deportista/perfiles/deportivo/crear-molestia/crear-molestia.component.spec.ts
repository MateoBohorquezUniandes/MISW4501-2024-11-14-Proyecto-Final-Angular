/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrearMolestiaComponent } from './crear-molestia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PerfilesService } from '../../perfiles.service';
import { Habito, Molestia, PerfilDeportivo, PerfilDeportivoData } from '../../perfil_deportivo';
import { of } from 'rxjs';
import { faker } from '@faker-js/faker';
import { LoginService } from '../../../../login/login.service';
import { MatFormFieldModule, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker'
import { DateAdapter , NativeDateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatDatepickerInputHarness } from '@angular/material/datepicker/testing'
import { provideNativeDateAdapter } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilDeportivoComponent } from '../deportivo.component';


describe('CrearMolestiaComponent', () => {
  let component: CrearMolestiaComponent;
  let fixture: ComponentFixture<CrearMolestiaComponent>;
  let spy = jasmine.createSpyObj('PerfilesService', ['createMolestia', 'getSportProfiles']);
  let spyLogin = jasmine.createSpyObj('LoginService', ['login', 'setToken']);
  let loader: HarnessLoader;
  let rootLoader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        //RouterTestingModule.withRoutes([{ path: 'socios', component: SocioHomeComponent },{ path: 'deportista', component: DeportistaHomeComponent },{ path: 'organizador', component: OrganizadorHomeComponent }]),
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatLabel,
        MatHint,
        MatDatepickerModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: PerfilDeportivoComponent},
        provideNativeDateAdapter(),
        { provide: PerfilesService, useValue: spy },
        { provide: LoginService, useValue: spyLogin },
      ],
      declarations: [CrearMolestiaComponent],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMolestiaComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Prueba metodo crear molestia', () => {
    fixture = TestBed.createComponent(CrearMolestiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const habitos: Array<Habito> = [];
    habitos.push(
      new Habito(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    );

    const molestias: Array<Molestia> = [];
      molestias.push(
        new Molestia(
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        )
      );
    const data2: PerfilDeportivoData = new PerfilDeportivoData("","",molestias,habitos)

    const titulo = component.molestiaForm.controls['titulo'];
    const fecha = component.molestiaForm.controls['fecha'];
    const descripcion = component.molestiaForm.controls['descripcion'];
    const tipo = component.molestiaForm.controls['tipo'];
    titulo.setValue('molest');
    fecha.setValue('2024-04-17');
    descripcion.setValue('molestias al andar en bicicle');
    tipo.setValue(1);
    expect(component.molestiaForm.valid).toBeTrue();
    const data = { token: 'blabla', rol: 'DEPORTISTA' };
    spyLogin.setToken.and.returnValue(of(data));
    const molestia = new Molestia(
      titulo.value,
      fecha.value,
      tipo.value,
      descripcion.value
    );
    spy.createMolestia.and.returnValue(of(202));
    spy.getSportProfiles.and.returnValue(
      of(new PerfilDeportivo(data2,""))
    );
    component.createMolestia(molestia);
  });
});
