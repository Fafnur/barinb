import { PageObject } from '@app/core/testing';

import { AdminRoomsActionsComponent } from './admin-rooms-actions.component';

enum AdminRoomsActionsAutomation {
  AdminRoomsClear = 'admin-rooms-clear',
  AdminRoomsAdd = 'admin-rooms-add',
}

export class AdminRoomsActionsComponentPo extends PageObject<AdminRoomsActionsComponent> {
  get adminRoomsClearText(): string | null {
    return this.text(AdminRoomsActionsAutomation.AdminRoomsClear);
  }
  get adminRoomsAddText(): string | null {
    return this.text(AdminRoomsActionsAutomation.AdminRoomsAdd);
  }

  triggerAdminRoomsClearClick(): void {
    return this.triggerEventHandler(AdminRoomsActionsAutomation.AdminRoomsClear, 'click');
  }

  triggerAdminRoomsAddClick(): void {
    return this.triggerEventHandler(AdminRoomsActionsAutomation.AdminRoomsAdd, 'click');
  }
}
