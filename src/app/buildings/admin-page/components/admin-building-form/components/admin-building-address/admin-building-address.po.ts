import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-address.component.spec';

enum AdminBuildingAddressAutomation {
  AdminBuildingAddressLabel = 'admin-building-address-label',
  AdminBuildingAddressControl = 'admin-building-address-control',
}

export class AdminBuildingAddressComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingAddressAutomation.AdminBuildingAddressControl);
  }

  get adminBuildingAddressControlId(): string | null {
    return this.adminBuildingAddressControl?.attributes['id'] ?? null;
  }

  get adminBuildingAddressLabelText(): string | null {
    return this.text(AdminBuildingAddressAutomation.AdminBuildingAddressLabel);
  }
}
