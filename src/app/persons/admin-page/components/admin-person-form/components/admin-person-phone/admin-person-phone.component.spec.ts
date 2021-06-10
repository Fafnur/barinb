import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PersonField, PERSONS_IDS } from '@app/persons/common';

import { AdminPersonPhoneComponent } from './admin-person-phone.component';
import { AdminPersonPhoneComponentPo } from './admin-person-phone.po';

@Component({
  template: `<app-admin-person-phone [control]="control"></app-admin-person-phone>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminPersonPhoneComponent', () => {
  let pageObject: AdminPersonPhoneComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminPersonPhoneComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonPhoneComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonAddressLabelText).toBe('Телефон');
    expect(pageObject.adminPersonAddressControlId).toBe(PERSONS_IDS[PersonField.Phone]);
  });
});
