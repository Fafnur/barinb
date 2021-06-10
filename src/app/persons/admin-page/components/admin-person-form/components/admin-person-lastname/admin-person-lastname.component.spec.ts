import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PersonField, PERSONS_IDS } from '@app/persons/common';

import { AdminPersonLastnameComponent } from './admin-person-lastname.component';
import { AdminPersonLastnameComponentPo } from './admin-person-lastname.po';

@Component({
  template: `<app-admin-person-lastname [control]="control"></app-admin-person-lastname>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminPersonLastnameComponent', () => {
  let pageObject: AdminPersonLastnameComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminPersonLastnameComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonLastnameComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonAddressLabelText).toBe('Фамилия');
    expect(pageObject.adminPersonAddressControlId).toBe(PERSONS_IDS[PersonField.LastName]);
  });
});
