/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerfilesService } from './perfiles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

  it('Debe traer un perfil', inject([PerfilesService], (service: PerfilesService) => {
    expect(service.getSportProfiles()).toBeTruthy();
  }));
});
