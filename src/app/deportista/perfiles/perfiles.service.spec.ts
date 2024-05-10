/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerfilesService } from './perfiles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearHabitoDTO, MolestiaDTO } from './perfil_deportivo';

describe('Service: Perfiles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [PerfilesService]
    });
  });

  it('should ...', inject([PerfilesService], (service: PerfilesService) => {
    expect(service).toBeTruthy();
  }));

  it('Debe traer un perfil deportivo', inject([PerfilesService], (service: PerfilesService) => {
    expect(service.getSportProfiles()).toBeTruthy();
  }));

  it('Debe traer un perfil demografico', inject([PerfilesService], (service: PerfilesService) => {
    expect(service.getDemographicProfiles()).toBeTruthy();
  }));

  it('Debe traer un perfil alimenticio', inject([PerfilesService], (service: PerfilesService) => {
    expect(service.getFoodProfiles()).toBeTruthy();
  }));

  it('Debe traer un listado de alimentos', inject([PerfilesService], (service: PerfilesService) => {
    expect(service.getFood()).toBeTruthy();
  }));

  it('Debe crear un habito', inject([PerfilesService], (service: PerfilesService) => {
    const habito = new CrearHabitoDTO("Correr","Diario","Correr todos los dias")
    expect(service.createHabitoDeportivo(habito)).toBeTruthy();
  }));

  it('Debe crear una molestia', inject([PerfilesService], (service: PerfilesService) => {
    const molestia = new MolestiaDTO("Dolor","5-5-2024","Dolor intenso", "Molestia")
    expect(service.createMolestia(molestia)).toBeTruthy();
  }));

  it('Debe asociar un alimento', inject([PerfilesService], (service: PerfilesService) => {
    const request = {
      id: "c98ff43c-202e-428e-a367-e2435228f486",
      nombre: "Pollo",
      categoria: "Proteina",
      tipo: "Preferencia"
    }
    expect(service.asociarAlimento(request)).toBeTruthy();
  }));

  it('Debe registrar un tipo de alimentación', inject([PerfilesService], (service: PerfilesService) => {
    const request = {
      tipo_alimentacion: "Vegano"
    }
    expect(service.registrarTipoAlimentacion(request)).toBeTruthy();
  }));
});
