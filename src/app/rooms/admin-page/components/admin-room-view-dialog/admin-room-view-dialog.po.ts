import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminRoomViewDialogComponent } from './admin-room-view-dialog.component';

enum AdminRoomViewDialogAutomation {
  AdminRoomPersonLabel = 'admin-room-person-label',
  AdminRoomPersonValue = 'admin-room-person-value',
  AdminRoomCityLabel = 'admin-room-city-label',
  AdminRoomCityValue = 'admin-room-city-value',
  AdminRoomAddressLabel = 'admin-room-address-label',
  AdminRoomAddressValue = 'admin-room-address-value',
  AdminRoomPriceLabel = 'admin-room-price-label',
  AdminRoomPriceValue = 'admin-room-price-value',
  AdminRoomGuestsLabel = 'admin-room-guests-label',
  AdminRoomGuestsValue = 'admin-room-guests-value',
  AdminRoomBedroomsLabel = 'admin-room-bedrooms-label',
  AdminRoomBedroomsValue = 'admin-room-bedrooms-value',
  AdminRoomBedsLabel = 'admin-room-beds-label',
  AdminRoomBedsValue = 'admin-room-beds-value',
  AdminRoomBathroomsLabel = 'admin-room-bathrooms-label',
  AdminRoomBathroomsValue = 'admin-room-bathrooms-value',
  AdminRoomDescriptionLabel = 'admin-room-description-label',
  AdminRoomDescriptionValue = 'admin-room-description-value',
  AdminRoomAmenitiesLabel = 'admin-room-amenities-label',
  AdminRoomAmenitiesValue = 'admin-room-amenities-value',

  AdminRoomClose = 'admin-room-close',
}

export class AdminRoomViewDialogComponentPo extends PageObject<AdminRoomViewDialogComponent> {
  get adminRoomPersonLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomPersonLabel);
  }

  get adminRoomPersonValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomPersonValue);
  }

  get adminRoomCityLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomCityLabel);
  }

  get adminRoomCityValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomCityValue);
  }

  get adminRoomAddressLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomAddressLabel);
  }

  get adminRoomAddressValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomAddressValue);
  }

  get adminRoomPriceLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomPriceLabel);
  }

  get adminRoomPriceValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomPriceValue);
  }

  get adminRoomGuestsLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomGuestsLabel);
  }

  get adminRoomGuestsValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomGuestsValue);
  }

  get adminRoomBedroomsLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomBedroomsLabel);
  }

  get adminRoomBedroomsValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomBedroomsValue);
  }

  get adminRoomBedsLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomBedsLabel);
  }

  get adminRoomBedsValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomBedsValue);
  }

  get adminRoomBathroomsLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomBathroomsLabel);
  }

  get adminRoomBathroomsValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomBathroomsValue);
  }

  get adminRoomDescriptionLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomDescriptionLabel);
  }

  get adminRoomDescriptionValueText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomDescriptionValue);
  }

  get adminRoomAmenitiesLabelText(): string | null {
    return this.text(AdminRoomViewDialogAutomation.AdminRoomAmenitiesLabel);
  }

  get adminRoomAmenitiesValue(): DebugElement[] {
    return this.getAllByAutomationId(AdminRoomViewDialogAutomation.AdminRoomAmenitiesValue);
  }

  triggerAdminRoomCloseClick(): void {
    return this.triggerEventHandler(AdminRoomViewDialogAutomation.AdminRoomClose, 'click');
  }
}
