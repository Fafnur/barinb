import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-props.component.spec';

enum RoomPropsAutomation {
  RoomPropGuests = 'room-prop-guests',
  RoomPropBedrooms = 'room-prop-bedrooms',
  RoomPropBeds = 'room-prop-beds',
  RoomPropBathrooms = 'room-prop-bathrooms',
}

export class RoomPropsComponentPo extends PageObject<WrapperComponent> {
  get roomPropGuestsText(): string | null {
    return this.text(RoomPropsAutomation.RoomPropGuests);
  }

  get roomPropBedroomsText(): string | null {
    return this.text(RoomPropsAutomation.RoomPropBedrooms);
  }

  get roomPropBedsText(): string | null {
    return this.text(RoomPropsAutomation.RoomPropBeds);
  }

  get roomPropBathroomsText(): string | null {
    return this.text(RoomPropsAutomation.RoomPropBathrooms);
  }
}
