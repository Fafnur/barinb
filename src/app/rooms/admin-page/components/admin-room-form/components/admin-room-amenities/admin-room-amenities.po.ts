import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-amenities.component.spec';

enum AdminRoomAmenitiesAutomation {
  AdminRoomAmenitiesLabel = 'admin-room-amenities-label',
  AdminRoomAmenitiesControl = 'admin-room-amenities-control',
}

export class AdminRoomAmenitiesComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAmenitiesControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomAmenitiesAutomation.AdminRoomAmenitiesControl);
  }

  get adminRoomAmenitiesControlId(): string | null {
    return this.adminRoomAmenitiesControl?.attributes['id'] ?? null;
  }

  get adminRoomAmenitiesLabelText(): string | null {
    return this.text(AdminRoomAmenitiesAutomation.AdminRoomAmenitiesLabel);
  }
}
