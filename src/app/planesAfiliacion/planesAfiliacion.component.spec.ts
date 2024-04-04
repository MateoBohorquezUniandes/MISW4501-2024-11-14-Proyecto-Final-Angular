import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAfiliacionComponent } from './planesAfiliacion.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('PlanesAfiliacionComponent', () => {
  let component: PlanesAfiliacionComponent;
  let fixture: ComponentFixture<PlanesAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations:[PlanesAfiliacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Container
  it('should have a div element with class container',()=> {
    const el =fixture.debugElement.query(By.css('div.container'));
    expect(el).toBeTruthy
  });

  //Plan Gratuito Card
  it('should contain a Free Plan Card',()=> {
    const cardDe: DebugElement = fixture.debugElement;
    const cardElement=cardDe.query(By.css('#CardGratuito')).nativeElement;
    expect(cardElement).toBeTruthy;
    expect(cardElement.getAttribute('class')).toEqual('card')
  });

  //Plan Premium Card
  it('should contain a Premium Plan Card',()=> {
    const cardDe: DebugElement = fixture.debugElement;
    const cardElement=cardDe.query(By.css('#CardPremium')).nativeElement;
    expect(cardElement).toBeTruthy;
    expect(cardElement.getAttribute('class')).toEqual('card')
  });

  //Plan Intermedio Card
  it('should contain a Intermediate Plan Card',()=> {
    const cardDe: DebugElement = fixture.debugElement;
    const cardElement=cardDe.query(By.css('#CardIntermedio')).nativeElement;
    expect(cardElement).toBeTruthy;
    expect(cardElement.getAttribute('class')).toEqual('card')
  });

  //btn Premium Card
  it('should contain a button in Premium Card',()=> {
    const btnDe: DebugElement = fixture.debugElement;
    const btnElement=btnDe.query(By.css('#btn_PlanPremium')).nativeElement;
    const btntext =btnElement.innerText;
    expect(btnElement).toBeTruthy;
    expect(btnElement.getAttribute('class')).toEqual('btn btn-primario')
    expect(btntext).toEqual('Continuar con Plan Premium')
  });

  //btn Intermediate Card
  it('should contain a button in Intermediate Card',()=> {
    const btnDe: DebugElement = fixture.debugElement;
    const btnElement=btnDe.query(By.css('#btn_PlanIntermedio')).nativeElement;
    const btntext =btnElement.innerText;
    expect(btnElement).toBeTruthy;
    expect(btnElement.getAttribute('class')).toEqual('btn btn-primario')
    expect(btntext).toEqual('Continuar con Plan Intermedio')
  });

  //btn to Continue with Basic Plan
  it('should contain a button to continue with Basic Plan',()=> {
    const btnDe: DebugElement = fixture.debugElement;
    const btnElement=btnDe.query(By.css('#btn_PlanGratuito')).nativeElement;
    const btntext =btnElement.innerText;
    expect(btnElement).toBeTruthy;
    expect(btnElement.getAttribute('class')).toEqual('btn btn-primario')
    expect(btntext).toEqual('Continuar con Plan Gratuito')
  });


});
