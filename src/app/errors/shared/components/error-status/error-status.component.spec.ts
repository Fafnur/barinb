import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorStatusComponent } from './error-status.component';
import { ErrorStatusComponentPo } from './error-status.po';

@Component({
  template: `<app-error-status automation-id="error-status" [color]="color"></app-error-status>`,
})
export class WrapperComponent {
  color: 'primary' | 'accent' | 'active' | 'danger' | null = null;
}

describe('ErrorStatusComponent', () => {
  let pageObject: ErrorStatusComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ErrorStatusComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new ErrorStatusComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set primary color', () => {
    fixtureWrapper.detectChanges();

    pageObject.setColor('primary');
    fixtureWrapper.detectChanges();

    expect(pageObject.isErrorStatusClasses('is-primary')).toBeTruthy();
    expect(pageObject.isErrorStatusClasses('is-accent')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-active')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-danger')).toBeFalsy();
  });

  it('should set accent color', () => {
    fixtureWrapper.detectChanges();

    pageObject.setColor('accent');
    fixtureWrapper.detectChanges();

    expect(pageObject.isErrorStatusClasses('is-primary')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-accent')).toBeTruthy();
    expect(pageObject.isErrorStatusClasses('is-active')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-danger')).toBeFalsy();
  });

  it('should set active color', () => {
    fixtureWrapper.detectChanges();

    pageObject.setColor('active');
    fixtureWrapper.detectChanges();

    expect(pageObject.isErrorStatusClasses('is-primary')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-accent')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-active')).toBeTruthy();
    expect(pageObject.isErrorStatusClasses('is-danger')).toBeFalsy();
  });

  it('should set danger color', () => {
    fixtureWrapper.detectChanges();

    pageObject.setColor('danger');
    fixtureWrapper.detectChanges();

    expect(pageObject.isErrorStatusClasses('is-primary')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-accent')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-active')).toBeFalsy();
    expect(pageObject.isErrorStatusClasses('is-danger')).toBeTruthy();
  });
});
