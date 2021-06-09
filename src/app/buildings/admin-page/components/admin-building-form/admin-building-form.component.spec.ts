import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MockModule } from 'ng-mocks';

import { BUILDING_EXTENDED_STUB } from '@app/buildings/manager';
import { FormsSharedModule } from '@app/core/forms/shared';
import { GridModule } from '@app/ui/grid';

import { AdminBuildingFormComponent } from './admin-building-form.component';
import { BuildingAdminFormComponentPo } from './admin-building-form.po';
import { AdminBuildingAddressModule } from './components/admin-building-address/admin-building-address.module';
import { AdminBuildingCityModule } from './components/admin-building-city/admin-building-city.module';
import { AdminBuildingLatModule } from './components/admin-building-lat/admin-building-lat.module';
import { AdminBuildingLngModule } from './components/admin-building-lng/admin-building-lng.module';
import { AdminBuildingNameModule } from './components/admin-building-name/admin-building-name.module';
import { AdminBuildingPersonModule } from './components/admin-building-person/admin-building-person.module';
import { AdminBuildingRoomsModule } from './components/admin-building-rooms/admin-building-rooms.module';

@Component({
  template: `<app-admin-building-form [form]="form"></app-admin-building-form>`,
})
export class WrapperComponent {
  form = new FormGroup({});
  building = BUILDING_EXTENDED_STUB;
}

describe('AdminBuildingFormComponent', () => {
  let pageObject: BuildingAdminFormComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatButtonModule,
          FormsSharedModule,
          GridModule,
          ReactiveFormsModule,
          MockModule(AdminBuildingCityModule),
          MockModule(AdminBuildingAddressModule),
          MockModule(AdminBuildingLatModule),
          MockModule(AdminBuildingNameModule),
          MockModule(AdminBuildingLngModule),
          MockModule(AdminBuildingRoomsModule),
          MockModule(AdminBuildingPersonModule),
        ],
        declarations: [AdminBuildingFormComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new BuildingAdminFormComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show forms fields', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingPerson).toBeTruthy();
    expect(pageObject.adminBuildingName).toBeTruthy();
    expect(pageObject.adminBuildingCity).toBeTruthy();
    expect(pageObject.adminBuildingAddress).toBeTruthy();
    expect(pageObject.adminBuildingLat).toBeTruthy();
    expect(pageObject.adminBuildingLng).toBeTruthy();
  });
});
