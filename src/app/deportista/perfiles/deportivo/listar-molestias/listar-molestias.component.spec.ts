/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarMolestiasComponent } from './listar-molestias.component';

describe('ListarMolestiasComponent', () => {
  let component: ListarMolestiasComponent;
  let fixture: ComponentFixture<ListarMolestiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ListarMolestiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMolestiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
