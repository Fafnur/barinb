import { PageObject } from '@app/core/testing';

import { AdminBuildingClearDialogComponent } from './admin-building-clear-dialog.component';

enum AdminBuildingClearDialogAutomation {
  AdminBuildingClearDialogTitle = 'admin-building-clear-dialog-title',
  AdminBuildingClearDialogContent = 'admin-building-clear-dialog-content',
  AdminBuildingClearDialogCancel = 'admin-building-clear-dialog-cancel',
  AdminBuildingClearDialogSuccess = 'admin-building-clear-dialog-success',
}

export class AdminBuildingClearDialogComponentPo extends PageObject<AdminBuildingClearDialogComponent> {
  get adminBuildingClearDialogTitleText(): string | null {
    return this.text(AdminBuildingClearDialogAutomation.AdminBuildingClearDialogTitle);
  }

  get adminBuildingClearDialogContentText(): string | null {
    return this.text(AdminBuildingClearDialogAutomation.AdminBuildingClearDialogContent);
  }

  get adminBuildingClearDialogCancelText(): string | null {
    return this.text(AdminBuildingClearDialogAutomation.AdminBuildingClearDialogCancel);
  }

  get adminBuildingClearDialogSuccessText(): string | null {
    return this.text(AdminBuildingClearDialogAutomation.AdminBuildingClearDialogSuccess);
  }

  triggerAdminBuildingClearDialogCancelClick(): void {
    return this.triggerEventHandler(AdminBuildingClearDialogAutomation.AdminBuildingClearDialogCancel, 'click');
  }

  triggerAdminBuildingClearDialogSuccessClick(): void {
    return this.triggerEventHandler(AdminBuildingClearDialogAutomation.AdminBuildingClearDialogSuccess, 'click');
  }
}
