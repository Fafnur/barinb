import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SpinnerComponent } from './spinner.component';
import { SpinnerComponentPo } from './spinner.po';

@Component({
  template: `<app-spinner></app-spinner>`,
})
export class WrapperComponent {}

describe('SpinnerComponent', () => {
  let pageObject: SpinnerComponentPo;
  let fixtureWraper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, NoopAnimationsModule],
      declarations: [SpinnerComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWraper = TestBed.createComponent(WrapperComponent);
    pageObject = new SpinnerComponentPo(fixtureWraper);
  });

  it('should create', () => {
    fixtureWraper.detectChanges();

    expect(fixtureWraper.componentInstance).toBeTruthy();
  });

  it('should show spinner', () => {
    fixtureWraper.detectChanges();

    expect(pageObject.spinner).toBeTruthy();
  });
});
