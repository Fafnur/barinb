import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';

import { AdminBuildingAddressComponent } from './admin-building-address.component';
import { AdminBuildingAddressComponentPo } from './admin-building-address.po';

@Component({
  template: `<app-admin-building-address [control]="control"></app-admin-building-address>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminBuildingAddressComponent', () => {
  let pageObject: AdminBuildingAddressComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
        declarations: [AdminBuildingAddressComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingAddressComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingAddressLabelText).toBe('Адрес');
    expect(pageObject.adminBuildingAddressControlId).toBe(BUILDINGS_IDS[BuildingField.Address]);
  });
});
