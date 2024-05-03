/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SidebarComponent } from './sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService } from '@auth0/angular-jwt'
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

describe('LayoutComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let spy = jasmine.createSpyObj('LoginService', ['login', 'setToken','getToken', 'deleteToken']);
  let spy2 = jasmine.createSpyObj('Router', ['navigateByUrl'],{url: "/deportista"});
  let router: Router;
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        SidebarComponent,
        BrowserAnimationsModule,
      ],
      providers: [
        {provide: LoginService, useValue: spy},
        {provide: Router, useValue: spy2}
      ]
    }).compileComponents();
    router = TestBed.inject(Router);
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

  /*it('router socio', () => {
    spyOnProperty(spy2, "url", "get").and.returnValue("/socio");
    spy.getToken.and.returnValue('');
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/
});
