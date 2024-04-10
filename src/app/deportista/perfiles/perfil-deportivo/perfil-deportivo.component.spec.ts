/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PerfilDeportivoComponent } from './perfil-deportivo.component';

describe('PerfilDeportivoComponent', () => {
  let component: PerfilDeportivoComponent;
  let fixture: ComponentFixture<PerfilDeportivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PerfilDeportivoComponent, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
