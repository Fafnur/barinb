import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-building.component.spec';

enum AdminRoomBuildingAutomation {
  AdminRoomBuildingLabel = 'admin-room-building-label',
  AdminRoomBuildingControl = 'admin-room-building-control',
}

export class AdminRoomBuildingComponentPo extends PageObject<WrapperComponent> {
  get adminRoomBuildingControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBuildingAutomation.AdminRoomBuildingControl);
  }

  get adminRoomBuildingControlId(): string | null {
    return this.adminRoomBuildingControl?.attributes['id'] ?? null;
  }

  get adminRoomBuildingLabelText(): string | null {
    return this.text(AdminRoomBuildingAutomation.AdminRoomBuildingLabel);
  }
}
