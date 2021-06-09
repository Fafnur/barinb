import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-lng.component.spec';

enum AdminBuildingLngAutomation {
  AdminBuildingLngLabel = 'admin-building-lng-label',
  AdminBuildingLngControl = 'admin-building-lng-control',
}

export class AdminBuildingLngComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingLngControl(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingLngAutomation.AdminBuildingLngControl);
  }

  get adminBuildingLngControlId(): string | null {
    return this.adminBuildingLngControl?.attributes['id'] ?? null;
  }

  get adminBuildingLngLabelText(): string | null {
    return this.text(AdminBuildingLngAutomation.AdminBuildingLngLabel);
  }
}
