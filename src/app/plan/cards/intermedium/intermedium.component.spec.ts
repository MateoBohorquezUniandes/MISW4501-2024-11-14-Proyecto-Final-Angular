/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntermediumComponent } from './intermedium.component';

describe('IntermediumComponent', () => {
  let component: IntermediumComponent;
  let fixture: ComponentFixture<IntermediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ IntermediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
