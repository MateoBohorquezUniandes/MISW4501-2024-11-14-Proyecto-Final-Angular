/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeportistaHomeComponent } from './dashboard.component';

describe('DeportistaHomeComponent', () => {
  let component: DeportistaHomeComponent;
  let fixture: ComponentFixture<DeportistaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DeportistaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportistaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
