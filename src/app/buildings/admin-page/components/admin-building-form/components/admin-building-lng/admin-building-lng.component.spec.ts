import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';

import { AdminBuildingLngComponent } from './admin-building-lng.component';
import { AdminBuildingLngComponentPo } from './admin-building-lng.po';

@Component({
  template: `<app-admin-building-lng [control]="control"></app-admin-building-lng>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminBuildingLngComponent', () => {
  let pageObject: AdminBuildingLngComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
        declarations: [AdminBuildingLngComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingLngComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingLngLabelText).toBe('LNG');
    expect(pageObject.adminBuildingLngControlId).toBe(BUILDINGS_IDS[BuildingField.Lng]);
  });
});
