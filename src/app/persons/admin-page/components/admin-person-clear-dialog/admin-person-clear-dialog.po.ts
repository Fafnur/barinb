import { PageObject } from '@app/core/testing';

import { AdminPersonClearDialogComponent } from './admin-person-clear-dialog.component';

enum AdminPersonClearDialogAutomation {
  AdminPersonClearDialogTitle = 'admin-person-clear-dialog-title',
  AdminPersonClearDialogContent = 'admin-person-clear-dialog-content',
  AdminPersonClearDialogCancel = 'admin-person-clear-dialog-cancel',
  AdminPersonClearDialogSuccess = 'admin-person-clear-dialog-success',
}

export class AdminPersonClearDialogComponentPo extends PageObject<AdminPersonClearDialogComponent> {
  get adminPersonClearDialogTitleText(): string | null {
    return this.text(AdminPersonClearDialogAutomation.AdminPersonClearDialogTitle);
  }

  get adminPersonClearDialogContentText(): string | null {
    return this.text(AdminPersonClearDialogAutomation.AdminPersonClearDialogContent);
  }

  get adminPersonClearDialogCancelText(): string | null {
    return this.text(AdminPersonClearDialogAutomation.AdminPersonClearDialogCancel);
  }

  get adminPersonClearDialogSuccessText(): string | null {
    return this.text(AdminPersonClearDialogAutomation.AdminPersonClearDialogSuccess);
  }

  triggerAdminPersonClearDialogCancelClick(): void {
    return this.triggerEventHandler(AdminPersonClearDialogAutomation.AdminPersonClearDialogCancel, 'click');
  }

  triggerAdminPersonClearDialogSuccessClick(): void {
    return this.triggerEventHandler(AdminPersonClearDialogAutomation.AdminPersonClearDialogSuccess, 'click');
  }
}
