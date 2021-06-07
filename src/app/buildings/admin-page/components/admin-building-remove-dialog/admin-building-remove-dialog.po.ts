import { PageObject } from '@app/core/testing';

import { AdminBuildingRemoveDialogComponent } from './admin-building-remove-dialog.component';

enum AdminBuildingRemoveDialogAutomation {
  AdminBuildingTitle = 'admin-building-title',
  AdminBuildingContent = 'admin-building-content',
  AdminBuildingCancel = 'admin-building-cancel',
  AdminBuildingRemove = 'admin-building-remove',
}

export class AdminBuildingRemoveDialogComponentPo extends PageObject<AdminBuildingRemoveDialogComponent> {
  get adminBuildingTitleText(): string | null {
    return this.text(AdminBuildingRemoveDialogAutomation.AdminBuildingTitle);
  }

  get adminBuildingContentText(): string | null {
    return this.text(AdminBuildingRemoveDialogAutomation.AdminBuildingContent);
  }

  get adminBuildingCancelText(): string | null {
    return this.text(AdminBuildingRemoveDialogAutomation.AdminBuildingCancel);
  }

  get adminBuildingRemoveText(): string | null {
    return this.text(AdminBuildingRemoveDialogAutomation.AdminBuildingRemove);
  }

  triggerAdminBuildingCancelClick(): void {
    return this.triggerEventHandler(AdminBuildingRemoveDialogAutomation.AdminBuildingCancel, 'click');
  }

  triggerAdminBuildingRemoveClick(): void {
    return this.triggerEventHandler(AdminBuildingRemoveDialogAutomation.AdminBuildingRemove, 'click');
  }
}
