/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventosService } from './eventos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Evento } from '../calendar/evento'

describe('Service: Eventos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [EventosService]
    });
  });

  it('should ...', inject([EventosService], (service: EventosService) => {
    expect(service).toBeTruthy();
  }));

  it('Debe traer eventos', inject([EventosService], (service: EventosService) => {
    expect(service.getAsociatedEvents(0)).toBeTruthy();
  }));
});
