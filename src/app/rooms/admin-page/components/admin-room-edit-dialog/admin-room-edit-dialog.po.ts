import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminRoomEditDialogComponent } from './admin-room-edit-dialog.component';

enum AdminRoomEditDialogAutomation {
  AdminRoomForm = 'admin-room-form',
  AdminRoomCancel = 'admin-room-cancel',
  AdminRoomChange = 'admin-room-change',
}

export class AdminRoomEditDialogComponentPo extends PageObject<AdminRoomEditDialogComponent> {
  get adminRoomForm(): DebugElement | null {
    return this.getByAutomationId(AdminRoomEditDialogAutomation.AdminRoomForm) ?? null;
  }

  get adminRoomCancelText(): string | null {
    return this.text(AdminRoomEditDialogAutomation.AdminRoomCancel);
  }

  get adminRoomChangeText(): string | null {
    return this.text(AdminRoomEditDialogAutomation.AdminRoomChange);
  }

  setFormError(): void {
    this.fixture.componentInstance.form.setErrors({ invalid: true });
  }

  triggerAdminRoomCancelClick(): void {
    return this.triggerEventHandler(AdminRoomEditDialogAutomation.AdminRoomCancel, 'click');
  }

  triggerAdminRoomChangeClick(): void {
    return this.triggerEventHandler(AdminRoomEditDialogAutomation.AdminRoomChange, 'click');
  }
}
