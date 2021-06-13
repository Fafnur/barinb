import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-description.component.spec';

enum AdminRoomDescriptionAutomation {
  AdminRoomDescriptionLabel = 'admin-room-description-label',
  AdminRoomDescriptionControl = 'admin-room-description-control',
}

export class AdminRoomDescriptionComponentPo extends PageObject<WrapperComponent> {
  get adminRoomDescriptionControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomDescriptionAutomation.AdminRoomDescriptionControl);
  }

  get adminRoomDescriptionControlId(): string | null {
    return this.adminRoomDescriptionControl?.attributes['id'] ?? null;
  }

  get adminRoomDescriptionLabelText(): string | null {
    return this.text(AdminRoomDescriptionAutomation.AdminRoomDescriptionLabel);
  }
}
