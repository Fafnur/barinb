import { PageObject } from '@app/core/testing';

import { AdminPersonRemoveDialogComponent } from './admin-person-remove-dialog.component';

enum AdminPersonRemoveDialogAutomation {
  AdminPersonTitle = 'admin-person-title',
  AdminPersonContent = 'admin-person-content',
  AdminPersonCancel = 'admin-person-cancel',
  AdminPersonRemove = 'admin-person-remove',
}

export class AdminPersonRemoveDialogComponentPo extends PageObject<AdminPersonRemoveDialogComponent> {
  get adminPersonTitleText(): string | null {
    return this.text(AdminPersonRemoveDialogAutomation.AdminPersonTitle);
  }

  get adminPersonContentText(): string | null {
    return this.text(AdminPersonRemoveDialogAutomation.AdminPersonContent);
  }

  get adminPersonCancelText(): string | null {
    return this.text(AdminPersonRemoveDialogAutomation.AdminPersonCancel);
  }

  get adminPersonRemoveText(): string | null {
    return this.text(AdminPersonRemoveDialogAutomation.AdminPersonRemove);
  }

  triggerAdminPersonCancelClick(): void {
    return this.triggerEventHandler(AdminPersonRemoveDialogAutomation.AdminPersonCancel, 'click');
  }

  triggerAdminPersonRemoveClick(): void {
    return this.triggerEventHandler(AdminPersonRemoveDialogAutomation.AdminPersonRemove, 'click');
  }
}
