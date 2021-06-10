import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PersonField, PERSONS_IDS } from '@app/persons/common';

import { AdminPersonMiddlenameComponent } from './admin-person-middlename.component';
import { AdminPersonMiddlenameComponentPo } from './admin-person-middlename.po';

@Component({
  template: `<app-admin-person-middlename [control]="control"></app-admin-person-middlename>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminPersonMiddlenameComponent', () => {
  let pageObject: AdminPersonMiddlenameComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminPersonMiddlenameComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonMiddlenameComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonAddressLabelText).toBe('Отчество');
    expect(pageObject.adminPersonAddressControlId).toBe(PERSONS_IDS[PersonField.MiddleName]);
  });
});
