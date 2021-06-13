import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-bedrooms.component.spec';

enum AdminRoomBedroomsAutomation {
  AdminRoomBedroomsLabel = 'admin-room-bedrooms-label',
  AdminRoomBedroomsControl = 'admin-room-bedrooms-control',
}

export class AdminRoomBedroomsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomBedroomsControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBedroomsAutomation.AdminRoomBedroomsControl);
  }

  get adminRoomBedroomsControlId(): string | null {
    return this.adminRoomBedroomsControl?.attributes['id'] ?? null;
  }

  get adminRoomBedroomsLabelText(): string | null {
    return this.text(AdminRoomBedroomsAutomation.AdminRoomBedroomsLabel);
  }
}
