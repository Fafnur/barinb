import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-beds.component.spec';

enum AdminRoomBedsAutomation {
  AdminRoomBedsLabel = 'admin-room-beds-label',
  AdminRoomBedsControl = 'admin-room-beds-control',
}

export class AdminRoomBedsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomBedsControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomBedsAutomation.AdminRoomBedsControl);
  }

  get adminRoomBedsControlId(): string | null {
    return this.adminRoomBedsControl?.attributes['id'] ?? null;
  }

  get adminRoomBedsLabelText(): string | null {
    return this.text(AdminRoomBedsAutomation.AdminRoomBedsLabel);
  }
}
