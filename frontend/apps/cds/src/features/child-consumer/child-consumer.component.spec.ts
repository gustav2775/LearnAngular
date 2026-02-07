/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildConsumerComponent } from './child-consumer.component';

describe('ChildConsumerComponent', () => {
  let component: ChildConsumerComponent;
  let fixture: ComponentFixture<ChildConsumerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ChildConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
