import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PersonField, PERSONS_IDS } from '@app/persons/common';

import { AdminPersonFirstnameComponent } from './admin-person-firstname.component';
import { AdminPersonFirstnameComponentPo } from './admin-person-firstname.po';

@Component({
  template: `<app-admin-person-firstname [control]="control"></app-admin-person-firstname>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminPersonFirstnameComponent', () => {
  let pageObject: AdminPersonFirstnameComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminPersonFirstnameComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonFirstnameComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonAddressLabelText).toBe('Имя');
    expect(pageObject.adminPersonAddressControlId).toBe(PERSONS_IDS[PersonField.FirstName]);
  });
});
