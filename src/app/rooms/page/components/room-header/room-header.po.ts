import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-header.component.spec';

enum RoomHeaderAutomation {
  RoomHeaderTitle = 'room-header-title',
  RoomHeaderClose = 'room-header-close',
}

export class RoomHeaderComponentPo extends PageObject<WrapperComponent> {
  get roomHeaderTitleText(): string | null {
    return this.text(RoomHeaderAutomation.RoomHeaderTitle);
  }

  get roomHeaderCloseText(): string | null {
    return this.text(RoomHeaderAutomation.RoomHeaderClose);
  }

  triggerRoomHeaderCloseClick(): void {
    this.triggerEventHandler(RoomHeaderAutomation.RoomHeaderClose, 'click');
  }
}
