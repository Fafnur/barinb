import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-form.component.spec';

enum BuildingAdminFormAutomation {
  AdminBuildingPerson = 'admin-building-person',
  AdminBuildingName = 'admin-building-name',
  AdminBuildingCity = 'admin-building-city',
  AdminBuildingAddress = 'admin-building-address',
  AdminBuildingLat = 'admin-building-lat',
  AdminBuildingLng = 'admin-building-lng',
}

export class BuildingAdminFormComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingPerson(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminFormAutomation.AdminBuildingPerson);
  }

  get adminBuildingName(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminFormAutomation.AdminBuildingName);
  }

  get adminBuildingCity(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminFormAutomation.AdminBuildingCity);
  }

  get adminBuildingAddress(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminFormAutomation.AdminBuildingAddress);
  }

  get adminBuildingLat(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminFormAutomation.AdminBuildingLat);
  }

  get adminBuildingLng(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminFormAutomation.AdminBuildingLng);
  }
}
