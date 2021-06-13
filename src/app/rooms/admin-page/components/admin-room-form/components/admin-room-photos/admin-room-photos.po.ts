import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-photos.component.spec';

enum AdminRoomPhotosAutomation {
  AdminRoomPhotosLabel = 'admin-room-photos-label',
  AdminRoomPhotosControl = 'admin-room-photos-control',
  AdminRoomPhotosControlInput = 'admin-room-photos-control-input',
  AdminRoomPhotosHint = 'admin-room-photos-hint',
}

export class AdminRoomPhotosComponentPo extends PageObject<WrapperComponent> {
  get adminRoomPhotosControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomPhotosAutomation.AdminRoomPhotosControl);
  }

  get adminRoomPhotosControlInputText(): string | null {
    return this.getByAutomationId(AdminRoomPhotosAutomation.AdminRoomPhotosControlInput)?.properties['id'] ?? null;
  }

  get adminRoomPhotosLabelText(): string | null {
    return this.text(AdminRoomPhotosAutomation.AdminRoomPhotosLabel);
  }

  get adminRoomPhotosHintText(): string | null {
    return this.text(AdminRoomPhotosAutomation.AdminRoomPhotosHint);
  }
}
