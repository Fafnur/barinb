import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-bedrooms.component.spec';

enum AdminRoomBedroomsAutomation {
  AdminRoomBedroomsLabel = 'admin-room-bedrooms-label',
  AdminRoomBedroomsControl = 'admin-room-bedrooms-control',
}

export class AdminRoomBedroomsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBedroomsAutomation.AdminRoomBedroomsControl);
  }

  get adminRoomAddressControlId(): string | null {
    return this.adminRoomAddressControl?.attributes['id'] ?? null;
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomBedroomsAutomation.AdminRoomBedroomsLabel);
  }
}
