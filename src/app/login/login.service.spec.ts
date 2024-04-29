/* tslint:disable:no-unused-variable */
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';

let mock = { location: { host:'/'}}

describe('Service: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [LoginService,{provide: 'document', useValue: mock}]
    });
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('Deberia logearse', inject([LoginService], (service: LoginService) => {
    let request = {
      contrasena: 'password',
      identificacion: {
        tipo: 'CC',
        valor: '79418556'
      },
      rol: 'DEPORTISTA',
    }
    expect(service.login(request)).toBeTruthy();
  }));

  /*it('Debe guardar y consultar un Token', inject([LoginService], (service: LoginService) => {
    service.setToken("AFKR834398NUOIJOM")
    expect(service.getToken()).toEqual("AFKR834398NUOIJOM");
  }));*/
});
