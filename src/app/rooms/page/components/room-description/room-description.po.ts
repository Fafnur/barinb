import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-description.component.spec';

enum RoomDescriptionAutomation {
  RoomDescription = 'room-description',
}

export class RoomDescriptionComponentPo extends PageObject<WrapperComponent> {
  get roomDescriptionText(): string | null {
    return this.text(RoomDescriptionAutomation.RoomDescription);
  }
}
