import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminBuildingCreateDialogComponent } from './admin-building-create-dialog.component';

enum AdminBuildingCreateDialogAutomation {
  AdminBuildingForm = 'admin-building-form',
  AdminBuildingCancel = 'admin-building-cancel',
  AdminBuildingAdd = 'admin-building-add',
}

export class AdminBuildingCreateDialogComponentPo extends PageObject<AdminBuildingCreateDialogComponent> {
  get adminBuildingForm(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingCreateDialogAutomation.AdminBuildingForm) ?? null;
  }

  get adminBuildingCancelText(): string | null {
    return this.text(AdminBuildingCreateDialogAutomation.AdminBuildingCancel);
  }

  get adminBuildingAddText(): string | null {
    return this.text(AdminBuildingCreateDialogAutomation.AdminBuildingAdd);
  }

  setFormError(): void {
    this.fixture.componentInstance.form.setErrors({ invalid: true });
  }

  triggerAdminBuildingCancelClick(): void {
    return this.triggerEventHandler(AdminBuildingCreateDialogAutomation.AdminBuildingCancel, 'click');
  }

  triggerAdminBuildingAddClick(): void {
    return this.triggerEventHandler(AdminBuildingCreateDialogAutomation.AdminBuildingAdd, 'click');
  }
}
