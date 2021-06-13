import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-guests.component.spec';

enum AdminRoomGuestsAutomation {
  AdminRoomGuestsLabel = 'admin-room-guests-label',
  AdminRoomGuestsControl = 'admin-room-guests-control',
}

export class AdminRoomGuestsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomGuestsControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomGuestsAutomation.AdminRoomGuestsControl);
  }

  get adminRoomGuestsControlId(): string | null {
    return this.adminRoomGuestsControl?.attributes['id'] ?? null;
  }

  get adminRoomGuestsLabelText(): string | null {
    return this.text(AdminRoomGuestsAutomation.AdminRoomGuestsLabel);
  }
}
