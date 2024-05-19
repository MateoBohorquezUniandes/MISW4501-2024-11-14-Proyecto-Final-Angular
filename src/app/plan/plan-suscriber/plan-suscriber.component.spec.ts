/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanSuscriberComponent } from './plan-suscriber.component';
import { IntermediumComponent } from '../cards/intermedium/intermedium.component';
import { PremiumComponent } from '../cards/premium/premium.component';
import { FreeComponent } from '../cards/free/free.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { PagosService } from './pagos.service';
import { of } from 'rxjs';

describe('PlanSuscriberComponent', () => {
  let component: PlanSuscriberComponent;
  let fixture: ComponentFixture<PlanSuscriberComponent>;
  let spy = jasmine.createSpyObj('Router', ['navigateByUrl'],{url: "/subscribe?subscription=intermedium"});
  let spy2 = jasmine.createSpyObj('PagosService',['changePlan'])

  function spyPropertyGetter<T, K extends keyof T>(
    spyObj: jasmine.SpyObj<T>,
    propName: K
  ): jasmine.Spy<() => T[K]> {
    return Object.getOwnPropertyDescriptor(spyObj, propName)?.get as jasmine.Spy<() => T[K]>;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        RouterTestingModule,
        PlanSuscriberComponent,
        IntermediumComponent,
        PremiumComponent,
        FreeComponent
      ],
      providers: [
        {provide: Router, useValue: spy},
        {provide: PagosService, useValue: spy2}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSuscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ingresar siendo premium', () => {
    spyPropertyGetter(spy, 'url').and.returnValue("/subscribe?subscription=premium")
    expect(component).toBeTruthy();
  });

  it('Validar Tarjeta (Exitoso)', () => {
    expect(component.validarTarjeta("1234567890123456","02/30","947")).toBeTruthy();
  });

  it('Validar Tarjeta (Fallido)', () => {
    expect(component.validarTarjeta("1234567890123456","02/31","947")).toBeFalse();
  });

  it('Test Cambiar Plan', () => {
    spy2.changePlan.and.returnValue(of(202));
    component.cambiarPlan("1234567890123456","02/30","947")
  });
});
