import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-person.component.spec';

enum AdminRoomPersonAutomation {
  AdminRoomPersonLabel = 'admin-room-person-label',
  AdminRoomPersonControl = 'admin-room-person-control',
}

export class AdminRoomPersonComponentPo extends PageObject<WrapperComponent> {
  get adminRoomPersonControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomPersonAutomation.AdminRoomPersonControl);
  }

  get adminRoomPersonControlId(): string | null {
    return this.adminRoomPersonControl?.attributes['id'] ?? null;
  }

  get adminRoomPersonLabelText(): string | null {
    return this.text(AdminRoomPersonAutomation.AdminRoomPersonLabel);
  }
}
