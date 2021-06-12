import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-person.component.spec';

enum RoomPersonAutomation {
  RoomPersonTitle = 'room-person-title',
  RoomPersonAvatar = 'room-person-avatar',
}

export class RoomPersonComponentPo extends PageObject<WrapperComponent> {
  get roomPersonTitleText(): string | null {
    return this.text(RoomPersonAutomation.RoomPersonTitle);
  }

  get roomPersonAvatarSrc(): string | null {
    return this.getByAutomationId(RoomPersonAutomation.RoomPersonAvatar)?.properties['src'] ?? null;
  }
}
