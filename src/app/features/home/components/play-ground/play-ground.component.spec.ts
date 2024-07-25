/* tslint:disable:no-unused-variable */
import * as testing from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayGroundComponent } from './play-ground.component';

describe('PlayGroundComponent', () => {
  let component: PlayGroundComponent;
  let fixture: testing.ComponentFixture<PlayGroundComponent>;

  beforeEach(testing.fakeAsync(() => {
    testing.TestBed.configureTestingModule({
      declarations: [ PlayGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = testing.TestBed.createComponent(PlayGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
