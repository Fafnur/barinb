import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-city.component.spec';

enum AdminBuildingCityAutomation {
  AdminBuildingCityLabel = 'admin-building-city-label',
  AdminBuildingCityControl = 'admin-building-city-control',
}

export class AdminBuildingCityComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingCityControl(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingCityAutomation.AdminBuildingCityControl);
  }

  get adminBuildingCityControlId(): string | null {
    return this.adminBuildingCityControl?.attributes['id'] ?? null;
  }

  get adminBuildingCityLabelText(): string | null {
    return this.text(AdminBuildingCityAutomation.AdminBuildingCityLabel);
  }
}
