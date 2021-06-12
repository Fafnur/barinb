import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-amenities.component.spec';

enum AdminRoomAmenitiesAutomation {
  AdminRoomAmenitiesLabel = 'admin-room-amenities-label',
  AdminRoomAmenitiesControl = 'admin-room-amenities-control',
}

export class AdminRoomAmenitiesComponentPo extends PageObject<WrapperComponent> {
  get adminRoomAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomAmenitiesAutomation.AdminRoomAmenitiesControl);
  }

  get adminRoomAddressControlId(): string | null {
    return this.adminRoomAddressControl?.attributes['id'] ?? null;
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomAmenitiesAutomation.AdminRoomAmenitiesLabel);
  }
}
