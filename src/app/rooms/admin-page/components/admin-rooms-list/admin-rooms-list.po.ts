import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminRoomsListAutomation {
  AdminRoomCard = 'admin-room-card',
}

export class AdminRoomsListComponentPo<T> extends PageObject<T> {
  get adminRoomCards(): DebugElement[] {
    return this.getAllByAutomationId(AdminRoomsListAutomation.AdminRoomCard);
  }
}
