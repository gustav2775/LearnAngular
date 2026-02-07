/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SseComponent } from './sse.component';

describe('SseComponent', () => {
  let component: SseComponent;
  let fixture: ComponentFixture<SseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
