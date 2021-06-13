import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-price.component.spec';

enum AdminRoomPriceAutomation {
  AdminRoomPriceLabel = 'admin-room-price-label',
  AdminRoomPriceControl = 'admin-room-price-control',
}

export class AdminRoomPriceComponentPo extends PageObject<WrapperComponent> {
  get adminRoomPriceControl(): DebugElement | null {
    return this.getByAutomationId(AdminRoomPriceAutomation.AdminRoomPriceControl);
  }

  get adminRoomPriceControlId(): string | null {
    return this.adminRoomPriceControl?.attributes['id'] ?? null;
  }

  get adminRoomPriceLabelText(): string | null {
    return this.text(AdminRoomPriceAutomation.AdminRoomPriceLabel);
  }
}
