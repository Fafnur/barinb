import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminPersonCreateDialogComponent } from './admin-person-create-dialog.component';

enum AdminPersonCreateDialogAutomation {
  AdminPersonForm = 'admin-person-form',
  AdminPersonCancel = 'admin-person-cancel',
  AdminPersonAdd = 'admin-person-add',
}

export class AdminPersonCreateDialogComponentPo extends PageObject<AdminPersonCreateDialogComponent> {
  get adminPersonForm(): DebugElement | null {
    return this.getByAutomationId(AdminPersonCreateDialogAutomation.AdminPersonForm) ?? null;
  }

  get adminPersonCancelText(): string | null {
    return this.text(AdminPersonCreateDialogAutomation.AdminPersonCancel);
  }

  get adminPersonAddText(): string | null {
    return this.text(AdminPersonCreateDialogAutomation.AdminPersonAdd);
  }

  setFormError(): void {
    this.fixture.componentInstance.form.setErrors({ invalid: true });
  }

  triggerAdminPersonCancelClick(): void {
    return this.triggerEventHandler(AdminPersonCreateDialogAutomation.AdminPersonCancel, 'click');
  }

  triggerAdminPersonAddClick(): void {
    return this.triggerEventHandler(AdminPersonCreateDialogAutomation.AdminPersonAdd, 'click');
  }
}
