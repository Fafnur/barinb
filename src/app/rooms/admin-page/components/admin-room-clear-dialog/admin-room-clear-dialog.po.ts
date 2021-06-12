import { PageObject } from '@app/core/testing';

import { AdminRoomClearDialogComponent } from './admin-room-clear-dialog.component';

enum AdminRoomClearDialogAutomation {
  AdminRoomClearDialogTitle = 'admin-room-clear-dialog-title',
  AdminRoomClearDialogContent = 'admin-room-clear-dialog-content',
  AdminRoomClearDialogCancel = 'admin-room-clear-dialog-cancel',
  AdminRoomClearDialogSuccess = 'admin-room-clear-dialog-success',
}

export class AdminRoomClearDialogComponentPo extends PageObject<AdminRoomClearDialogComponent> {
  get adminRoomClearDialogTitleText(): string | null {
    return this.text(AdminRoomClearDialogAutomation.AdminRoomClearDialogTitle);
  }

  get adminRoomClearDialogContentText(): string | null {
    return this.text(AdminRoomClearDialogAutomation.AdminRoomClearDialogContent);
  }

  get adminRoomClearDialogCancelText(): string | null {
    return this.text(AdminRoomClearDialogAutomation.AdminRoomClearDialogCancel);
  }

  get adminRoomClearDialogSuccessText(): string | null {
    return this.text(AdminRoomClearDialogAutomation.AdminRoomClearDialogSuccess);
  }

  triggerAdminRoomClearDialogCancelClick(): void {
    return this.triggerEventHandler(AdminRoomClearDialogAutomation.AdminRoomClearDialogCancel, 'click');
  }

  triggerAdminRoomClearDialogSuccessClick(): void {
    return this.triggerEventHandler(AdminRoomClearDialogAutomation.AdminRoomClearDialogSuccess, 'click');
  }
}
