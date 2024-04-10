/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { PerfilAlimenticioComponent } from './perfil-alimenticio.component';

describe('PerfilAlimenticioComponent', () => {
  let component: PerfilAlimenticioComponent;
  let fixture: ComponentFixture<PerfilAlimenticioComponent>;
  let debug: DebugElement;

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
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir una opción para ir al perfil demografico', () => {
    expect(debug.queryAll(By.css('a#nav_demografico'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_demografico'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfil-demografico');
  });

  it('Debe existir una opción para ir al perfil deportivo', () => {
    expect(debug.queryAll(By.css('a#nav_deportivo'))).toHaveSize(1)
    let element = debug.query(By.css('a#nav_deportivo'));
    expect(element.nativeElement.getAttribute('routerLink')).toEqual('/deportista/perfil-deportivo');
  });

  it('Debe existir un titulo', () => {
    expect(debug.queryAll(By.css('h5'))).toHaveSize(1)
  });

});
