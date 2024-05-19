/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuscripcionComponent } from './suscripcion.component';
import { LoginService } from '../../login/login.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemografiaUsuario, Usuario } from '../../login/usuario';
import { of } from 'rxjs';

describe('SuscripcionComponent', () => {
  let component: SuscripcionComponent;
  let fixture: ComponentFixture<SuscripcionComponent>;
  let spy = jasmine.createSpyObj('LoginService', ['getUser']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SuscripcionComponent,
        ToastrModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        { provide: LoginService, useValue: spy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionComponent);
    component = fixture.componentInstance;
    const usuario = new Usuario("Rodriguez","Martin","GRATUITO","DEPORTISTA","","",new DemografiaUsuario(0.5,"","Bogota",23,"M","Colombia","Colombia",53,8))
    spy.getUser.and.returnValue(of(usuario));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
