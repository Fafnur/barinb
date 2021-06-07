import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminBuildingEditDialogComponent } from './admin-building-edit-dialog.component';

enum AdminBuildingEditDialogAutomation {
  AdminBuildingForm = 'admin-building-form',
  AdminBuildingCancel = 'admin-building-cancel',
  AdminBuildingChange = 'admin-building-change',
}

export class AdminBuildingEditDialogComponentPo extends PageObject<AdminBuildingEditDialogComponent> {
  get adminBuildingForm(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingEditDialogAutomation.AdminBuildingForm) ?? null;
  }

  get adminBuildingCancelText(): string | null {
    return this.text(AdminBuildingEditDialogAutomation.AdminBuildingCancel);
  }

  get adminBuildingChangeText(): string | null {
    return this.text(AdminBuildingEditDialogAutomation.AdminBuildingChange);
  }

  setFormError(): void {
    this.fixture.componentInstance.form.setErrors({ invalid: true });
  }

  triggerAdminBuildingCancelClick(): void {
    return this.triggerEventHandler(AdminBuildingEditDialogAutomation.AdminBuildingCancel, 'click');
  }

  triggerAdminBuildingChangeClick(): void {
    return this.triggerEventHandler(AdminBuildingEditDialogAutomation.AdminBuildingChange, 'click');
  }
}
