import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';

import { AdminBuildingNameComponent } from './admin-building-name.component';
import { AdminBuildingNameComponentPo } from './admin-building-name.po';

@Component({
  template: `<app-admin-building-name [control]="control"></app-admin-building-name>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminBuildingNameComponent', () => {
  let pageObject: AdminBuildingNameComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
        declarations: [AdminBuildingNameComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingNameComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingNameLabelText).toBe('Название');
    expect(pageObject.adminBuildingNameControlId).toBe(BUILDINGS_IDS[BuildingField.Name]);
  });
});
