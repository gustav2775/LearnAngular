/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongPullingComponent } from './long-pulling';

describe('LongPullingComponent', () => {
  let component: LongPullingComponent;
  let fixture: ComponentFixture<LongPullingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongPullingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongPullingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
