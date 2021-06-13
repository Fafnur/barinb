import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-building.component.spec';

enum AdminRoomBuildingAutomation {
  AdminRoomBuildingLabel = 'admin-room-building-label',
  AdminRoomBuildingControl = 'admin-room-building-control',
}

export class AdminRoomBuildingComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBuildingAutomation.AdminRoomBuildingControl);
  }

  get adminRoomAddressControlId(): string | null {
    return this.adminRoomAddressControl?.attributes['id'] ?? null;
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomBuildingAutomation.AdminRoomBuildingLabel);
  }
}
