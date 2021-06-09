import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';

import { AdminBuildingCityComponent } from './admin-building-city.component';
import { AdminBuildingCityComponentPo } from './admin-building-city.po';

@Component({
  template: `<app-admin-building-city [control]="control"></app-admin-building-city>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminBuildingCityComponent', () => {
  let pageObject: AdminBuildingCityComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
        declarations: [AdminBuildingCityComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingCityComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCityLabelText).toBe('Город');
    expect(pageObject.adminBuildingCityControlId).toBe(BUILDINGS_IDS[BuildingField.City]);
  });
});
