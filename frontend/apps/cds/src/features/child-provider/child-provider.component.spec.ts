/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildProviderComponent } from './child-provider.component';

describe('ChildProviderComponent', () => {
  let component: ChildProviderComponent;
  let fixture: ComponentFixture<ChildProviderComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ChildProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
