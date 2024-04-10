/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { PerfilAlimenticioComponent } from './perfil-alimenticio.component';

describe('PerfilAlimenticioComponent', () => {
  let component: PerfilAlimenticioComponent;
  let fixture: ComponentFixture<PerfilAlimenticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PerfilAlimenticioComponent, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAlimenticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
