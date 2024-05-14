/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, LOCALE_ID } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SidebarComponent } from './sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService } from '@auth0/angular-jwt'
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';

describe('LayoutComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let spy = jasmine.createSpyObj('LoginService', ['login', 'setToken','getToken', 'deleteToken']);
  let spy2 = jasmine.createSpyObj('Router', ['navigateByUrl'],{url: "/deportista"});
  //window.onbeforeunload = jasmine.createSpy();
  let router: Router;

  function spyPropertyGetter<T, K extends keyof T>(
    spyObj: jasmine.SpyObj<T>,
    propName: K
  ): jasmine.Spy<() => T[K]> {
    return Object.getOwnPropertyDescriptor(spyObj, propName)?.get as jasmine.Spy<() => T[K]>;
  }

  beforeEach(async (() => {
    registerLocaleData(localeEn, 'en');
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        SidebarComponent,
        BrowserAnimationsModule,
      ],
      providers: [
        {provide: LOCALE_ID, useValue:'en'},
        {provide: LoginService, useValue: spy},
        {provide: Router, useValue: spy2}
      ]
    }).compileComponents();
    //router = TestBed.inject(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    spy.getToken.and.returnValue('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('signOut y router deportista', () => {
    component.signOut();
    fixture.detectChanges();
    let token = spy.getToken();
    expect(token).toEqual('');
  });

  it('test User', () => {
    spy.getToken.and.returnValue('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMzMxMjYxNCwianRpIjoiMTk2ODc2YWYtNDFhNy00YjI4LThlM2ItYTZmMmViYWE1YjlhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ0aXBvIjoiQ0MiLCJ2YWxvciI6IjEyMzQ1Njc4OSJ9LCJuYmYiOjE3MTMzMTI2MTQsImNzcmYiOiJlZWYxOGEzMC1lMzgyLTRiOTItYjlhOS02ZjJlZjdiYjgzZWMiLCJleHAiOjE3MTMzMzc4MTR9.OAq6ifrIhmXtflYzgEG1wd5r1kiUTfSn-y4DlH_RcDA');
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.user).toEqual("123456789");
  });

  it('router socio', () => {
    spyPropertyGetter(spy2, 'url').and.returnValue("/socio")
    fixture.detectChanges();
    spy.getToken.and.returnValue('');
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('router organizador', () => {
    spyPropertyGetter(spy2, 'url').and.returnValue("/organizador")
    fixture.detectChanges();
    spy.getToken.and.returnValue('');
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('router socio token', () => {
    spyPropertyGetter(spy2, 'url').and.returnValue("/socio?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMzMxMjYxNCwianRpIjoiMTk2ODc2YWYtNDFhNy00YjI4LThlM2ItYTZmMmViYWE1YjlhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ0aXBvIjoiQ0MiLCJ2YWxvciI6IjEyMzQ1Njc4OSJ9LCJuYmYiOjE3MTMzMTI2MTQsImNzcmYiOiJlZWYxOGEzMC1lMzgyLTRiOTItYjlhOS02ZjJlZjdiYjgzZWMiLCJleHAiOjE3MTMzMzc4MTR9.OAq6ifrIhmXtflYzgEG1wd5r1kiUTfSn-y4DlH_RcDA")
    fixture.detectChanges();
    spy.getToken.and.returnValue('');
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('router organizador token', () => {
    spyPropertyGetter(spy2, 'url').and.returnValue("/organizador?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMzMxMjYxNCwianRpIjoiMTk2ODc2YWYtNDFhNy00YjI4LThlM2ItYTZmMmViYWE1YjlhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ0aXBvIjoiQ0MiLCJ2YWxvciI6IjEyMzQ1Njc4OSJ9LCJuYmYiOjE3MTMzMTI2MTQsImNzcmYiOiJlZWYxOGEzMC1lMzgyLTRiOTItYjlhOS02ZjJlZjdiYjgzZWMiLCJleHAiOjE3MTMzMzc4MTR9.OAq6ifrIhmXtflYzgEG1wd5r1kiUTfSn-y4DlH_RcDA")
    fixture.detectChanges();
    spy.getToken.and.returnValue('');
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create english', () => {
    //window.onbeforeunload = () => 'Oh no!';
    $localize.locale = 'en';
    expect(component).toBeTruthy();
    //component.changeLanguage();
    fixture.detectChanges();
  });

  it('should create english', () => {
    //window.onbeforeunload = () => 'Oh no!';
    $localize.locale = 'es';
    expect(component).toBeTruthy();
    //component.changeLanguage();
    fixture.detectChanges();
  });

  it('should create token url', () => {
    //window.onbeforeunload = () => 'Oh no!';
    spyPropertyGetter(spy2, 'url').and.returnValue("/deportista?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMzMxMjYxNCwianRpIjoiMTk2ODc2YWYtNDFhNy00YjI4LThlM2ItYTZmMmViYWE1YjlhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ0aXBvIjoiQ0MiLCJ2YWxvciI6IjEyMzQ1Njc4OSJ9LCJuYmYiOjE3MTMzMTI2MTQsImNzcmYiOiJlZWYxOGEzMC1lMzgyLTRiOTItYjlhOS02ZjJlZjdiYjgzZWMiLCJleHAiOjE3MTMzMzc4MTR9.OAq6ifrIhmXtflYzgEG1wd5r1kiUTfSn-y4DlH_RcDA")
    expect(component).toBeTruthy();
    //component.changeLanguage();
    fixture.detectChanges();
  });
});
