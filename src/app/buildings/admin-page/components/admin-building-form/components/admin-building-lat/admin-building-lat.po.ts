import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-lat.component.spec';

enum AdminBuildingLatAutomation {
  AdminBuildingLatLabel = 'admin-building-lat-label',
  AdminBuildingLatControl = 'admin-building-lat-control',
}

export class AdminBuildingLatComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingLatControl(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingLatAutomation.AdminBuildingLatControl);
  }

  get adminBuildingLatControlId(): string | null {
    return this.adminBuildingLatControl?.attributes['id'] ?? null;
  }

  get adminBuildingLatLabelText(): string | null {
    return this.text(AdminBuildingLatAutomation.AdminBuildingLatLabel);
  }
}
