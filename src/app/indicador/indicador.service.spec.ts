/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { IndicadorService } from './indicador.service';

describe('Service: Indicador', () => {
   beforeEach(() => {
     TestBed.configureTestingModule({
       imports:[HttpClientTestingModule],
       providers: [IndicadorService]
     });
   });

   it('should ...', inject([IndicadorService], (service: IndicadorService) => {
     expect(service).toBeTruthy();
   }));

   it('Debe crear una formula', inject([IndicadorService], (service: IndicadorService) => {
    expect(service.crearFormula({})).toBeTruthy();
   }));

   it('Debe obtener una lista de formulas', inject([IndicadorService], (service: IndicadorService) => {
    expect(service.getFormulas()).toBeTruthy();
   }));
 });
