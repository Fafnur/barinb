import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminPersonEditDialogComponent } from './admin-person-edit-dialog.component';

enum AdminPersonEditDialogAutomation {
  AdminPersonForm = 'admin-person-form',
  AdminPersonCancel = 'admin-person-cancel',
  AdminPersonChange = 'admin-person-change',
}

export class AdminPersonEditDialogComponentPo extends PageObject<AdminPersonEditDialogComponent> {
  get adminPersonForm(): DebugElement | null {
    return this.getByAutomationId(AdminPersonEditDialogAutomation.AdminPersonForm) ?? null;
  }

  get adminPersonCancelText(): string | null {
    return this.text(AdminPersonEditDialogAutomation.AdminPersonCancel);
  }

  get adminPersonChangeText(): string | null {
    return this.text(AdminPersonEditDialogAutomation.AdminPersonChange);
  }

  setFormError(): void {
    this.fixture.componentInstance.form.setErrors({ invalid: true });
  }

  triggerAdminPersonCancelClick(): void {
    return this.triggerEventHandler(AdminPersonEditDialogAutomation.AdminPersonCancel, 'click');
  }

  triggerAdminPersonChangeClick(): void {
    return this.triggerEventHandler(AdminPersonEditDialogAutomation.AdminPersonChange, 'click');
  }
}
