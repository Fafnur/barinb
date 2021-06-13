import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-bathrooms.component.spec';

enum AdminRoomBathroomsAutomation {
  AdminRoomBathroomsLabel = 'admin-room-bathrooms-label',
  AdminRoomBathroomsControl = 'admin-room-bathrooms-control',
}

export class AdminRoomBathroomsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomBathroomsControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBathroomsAutomation.AdminRoomBathroomsControl);
  }

  get adminRoomBathroomsControlId(): string | null {
    return this.adminRoomBathroomsControl?.attributes['id'] ?? null;
  }

  get adminRoomBathroomsLabelText(): string | null {
    return this.text(AdminRoomBathroomsAutomation.AdminRoomBathroomsLabel);
  }
}
