import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { RoomAdminPageComponent } from './room-admin-page.component';

enum RoomAdminPageAutomation {
  AdminRoomsActions = 'admin-rooms-actions',
  AdminRoomsTable = 'admin-rooms-table',
  AdminRoomsList = 'admin-rooms-list',
}

export class RoomAdminPageComponentPo extends PageObject<RoomAdminPageComponent> {
  get adminRoomsActions(): DebugElement | null {
    return this.getByAutomationId(RoomAdminPageAutomation.AdminRoomsActions) ?? null;
  }

  get adminRoomsTable(): DebugElement | null {
    return this.getByAutomationId(RoomAdminPageAutomation.AdminRoomsTable) ?? null;
  }

  get adminRoomsList(): DebugElement | null {
    return this.getByAutomationId(RoomAdminPageAutomation.AdminRoomsList) ?? null;
  }

  get isDesktopScreen(): boolean {
    return this.fixture.componentInstance.isDesktopScreen;
  }
}
