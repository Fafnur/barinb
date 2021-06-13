import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-description.component.spec';

enum AdminRoomDescriptionAutomation {
  AdminRoomDescriptionLabel = 'admin-room-description-label',
  AdminRoomDescriptionControl = 'admin-room-description-control',
}

export class AdminRoomDescriptionComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomDescriptionAutomation.AdminRoomDescriptionControl);
  }

  get adminRoomAddressControlId(): string | null {
    return this.adminRoomAddressControl?.attributes['id'] ?? null;
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomDescriptionAutomation.AdminRoomDescriptionLabel);
  }
}
