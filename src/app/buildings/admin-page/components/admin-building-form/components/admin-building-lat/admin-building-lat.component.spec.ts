import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';

import { AdminBuildingLatComponent } from './admin-building-lat.component';
import { AdminBuildingLatComponentPo } from './admin-building-lat.po';

@Component({
  template: `<app-admin-building-lat [control]="control"></app-admin-building-lat>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminBuildingLatComponent', () => {
  let pageObject: AdminBuildingLatComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
        declarations: [AdminBuildingLatComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingLatComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingLatLabelText).toBe('LAT');
    expect(pageObject.adminBuildingLatControlId).toBe(BUILDINGS_IDS[BuildingField.Lat]);
  });
});
