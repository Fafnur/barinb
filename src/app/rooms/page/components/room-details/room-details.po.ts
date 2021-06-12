import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-details.component.spec';

enum RoomDetailsAutomation {
  RoomDetailsStar = 'room-details-star',
  RoomDetailsPerson = 'room-details-person',
  RoomDetailsAddress = 'room-details-address',
}

export class RoomDetailsComponentPo extends PageObject<WrapperComponent> {
  get roomDetailsStarText(): string | null {
    return this.text(RoomDetailsAutomation.RoomDetailsStar);
  }

  get roomDetailsPersonText(): string | null {
    return this.text(RoomDetailsAutomation.RoomDetailsPerson);
  }

  get roomDetailsAddressText(): string | null {
    return this.text(RoomDetailsAutomation.RoomDetailsAddress);
  }
}
