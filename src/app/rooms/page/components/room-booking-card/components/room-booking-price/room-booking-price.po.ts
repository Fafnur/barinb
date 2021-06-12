import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-booking-price.component.spec';

enum RoomBookingPriceAutomation {
  RoomBookingPriceLabel = 'room-booking-price-label',
  RoomBookingPriceValue = 'room-booking-price-value',
  RoomBookingCleaningLabel = 'room-booking-cleaning-label',
  RoomBookingCleaningValue = 'room-booking-cleaning-value',
  RoomBookingFeeLabel = 'room-booking-fee-label',
  RoomBookingFeeValue = 'room-booking-fee-value',
  RoomBookingTotalLabel = 'room-booking-total-label',
  RoomBookingTotalValue = 'room-booking-total-value',
}

export class RoomBookingPriceComponentPo extends PageObject<WrapperComponent> {
  get roomBookingPriceLabelText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingPriceLabel);
  }

  get roomBookingPriceValueText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingPriceValue);
  }

  get roomBookingCleaningLabelText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingCleaningLabel);
  }

  get roomBookingCleaningValueText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingCleaningValue);
  }

  get roomBookingFeeLabelText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingFeeLabel);
  }

  get roomBookingFeeValueText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingFeeValue);
  }

  get roomBookingTotalLabelText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingTotalLabel);
  }

  get roomBookingTotalValueText(): string | null {
    return this.text(RoomBookingPriceAutomation.RoomBookingTotalValue);
  }
}
