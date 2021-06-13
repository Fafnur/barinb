import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-beds.component.spec';

enum AdminRoomBedsAutomation {
  AdminRoomBedsLabel = 'admin-room-beds-label',
  AdminRoomBedsControl = 'admin-room-beds-control',
}

export class AdminRoomBedsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBedsAutomation.AdminRoomBedsControl);
  }

  get adminRoomAddressControlId(): string | null {
    return this.adminRoomAddressControl?.attributes['id'] ?? null;
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomBedsAutomation.AdminRoomBedsLabel);
  }
}
