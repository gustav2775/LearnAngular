/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildRouterComponent } from './child-router.component';

describe('ChildRouterComponent', () => {
  let component: ChildRouterComponent;
  let fixture: ComponentFixture<ChildRouterComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
