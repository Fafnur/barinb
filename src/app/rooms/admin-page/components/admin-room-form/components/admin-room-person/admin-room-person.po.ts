import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-person.component.spec';

enum AdminRoomPersonAutomation {
  AdminRoomPersonLabel = 'admin-room-person-label',
  AdminRoomPersonControl = 'admin-room-person-control',
}

export class AdminRoomPersonComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomPersonAutomation.AdminRoomPersonControl);
  }

  get adminRoomAddressControlId(): string | null {
    return this.adminRoomAddressControl?.attributes['id'] ?? null;
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomPersonAutomation.AdminRoomPersonLabel);
  }
}
