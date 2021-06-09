import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-rooms.component.spec';

enum AdminBuildingRoomsAutomation {
  AdminBuildingRoomsLabel = 'admin-building-rooms-label',
  AdminBuildingRoomsControl = 'admin-building-rooms-control',
}

export class AdminBuildingRoomsComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingRoomsControl(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingRoomsAutomation.AdminBuildingRoomsControl);
  }

  get adminBuildingRoomsControlId(): string | null {
    return this.adminBuildingRoomsControl?.attributes['id'] ?? null;
  }

  get adminBuildingRoomsLabelText(): string | null {
    return this.text(AdminBuildingRoomsAutomation.AdminBuildingRoomsLabel);
  }
}
