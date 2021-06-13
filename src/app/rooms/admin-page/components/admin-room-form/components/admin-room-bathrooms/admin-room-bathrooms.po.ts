import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-bathrooms.component.spec';

enum AdminRoomBathroomsAutomation {
  AdminRoomBathroomsLabel = 'admin-room-bathrooms-label',
  AdminRoomBathroomsControl = 'admin-room-bathrooms-control',
}

export class AdminRoomBathroomsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBathroomsAutomation.AdminRoomBathroomsControl);
  }

  get adminRoomAddressControlId(): string | null {
    return this.adminRoomAddressControl?.attributes['id'] ?? null;
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomBathroomsAutomation.AdminRoomBathroomsLabel);
  }
}
