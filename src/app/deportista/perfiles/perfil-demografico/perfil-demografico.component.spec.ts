/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PerfilDemograficoComponent } from './perfil-demografico.component';

describe('PerfilDemograficoComponent', () => {
  let component: PerfilDemograficoComponent;
  let fixture: ComponentFixture<PerfilDemograficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PerfilDemograficoComponent, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDemograficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
