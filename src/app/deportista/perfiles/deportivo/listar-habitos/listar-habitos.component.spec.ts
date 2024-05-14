/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarHabitosComponent } from './listar-habitos.component';

describe('ListarHabitosComponent', () => {
  let component: ListarHabitosComponent;
  let fixture: ComponentFixture<ListarHabitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ListarHabitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHabitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
