/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PagosService } from './pagos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Pagos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [PagosService]
    });
  });

  it('should ...', inject([PagosService], (service: PagosService) => {
    expect(service).toBeTruthy();
  }));

  it('Debe obtener un token nulo', inject([PagosService], (service: PagosService) => {
    const request = {
      plan_afiliacion: "PREMIUM"
    }
    expect(service.changePlan(request)).toBeTruthy();
  }));
});
