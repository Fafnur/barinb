import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PersonField, PERSONS_IDS } from '@app/persons/common';

import { AdminPersonAvatarComponent } from './admin-person-avatar.component';
import { AdminPersonAvatarComponentPo } from './admin-person-avatar.po';

@Component({
  template: `<app-admin-person-avatar [control]="control"></app-admin-person-avatar>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminPersonAvatarComponent', () => {
  let pageObject: AdminPersonAvatarComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminPersonAvatarComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonAvatarComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonAddressLabelText).toBe('Аватар');
    expect(pageObject.adminPersonAddressControlId).toBe(PERSONS_IDS[PersonField.Avatar]);
  });
});
