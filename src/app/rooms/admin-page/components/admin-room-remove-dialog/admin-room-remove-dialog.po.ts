import { PageObject } from '@app/core/testing';

import { AdminRoomRemoveDialogComponent } from './admin-room-remove-dialog.component';

enum AdminRoomRemoveDialogAutomation {
  AdminRoomTitle = 'admin-room-title',
  AdminRoomContent = 'admin-room-content',
  AdminRoomCancel = 'admin-room-cancel',
  AdminRoomRemove = 'admin-room-remove',
}

export class AdminRoomRemoveDialogComponentPo extends PageObject<AdminRoomRemoveDialogComponent> {
  get adminRoomTitleText(): string | null {
    return this.text(AdminRoomRemoveDialogAutomation.AdminRoomTitle);
  }

  get adminRoomContentText(): string | null {
    return this.text(AdminRoomRemoveDialogAutomation.AdminRoomContent);
  }

  get adminRoomCancelText(): string | null {
    return this.text(AdminRoomRemoveDialogAutomation.AdminRoomCancel);
  }

  get adminRoomRemoveText(): string | null {
    return this.text(AdminRoomRemoveDialogAutomation.AdminRoomRemove);
  }

  triggerAdminRoomCancelClick(): void {
    return this.triggerEventHandler(AdminRoomRemoveDialogAutomation.AdminRoomCancel, 'click');
  }

  triggerAdminRoomRemoveClick(): void {
    return this.triggerEventHandler(AdminRoomRemoveDialogAutomation.AdminRoomRemove, 'click');
  }
}
