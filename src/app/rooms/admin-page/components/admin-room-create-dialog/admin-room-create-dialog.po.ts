import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminRoomCreateDialogComponent } from './admin-room-create-dialog.component';

enum AdminRoomCreateDialogAutomation {
  AdminRoomForm = 'admin-room-form',
  AdminRoomCancel = 'admin-room-cancel',
  AdminRoomAdd = 'admin-room-add',
}

export class AdminRoomCreateDialogComponentPo extends PageObject<AdminRoomCreateDialogComponent> {
  get adminRoomForm(): DebugElement | null {
    return this.getByAutomationId(AdminRoomCreateDialogAutomation.AdminRoomForm) ?? null;
  }

  get adminRoomCancelText(): string | null {
    return this.text(AdminRoomCreateDialogAutomation.AdminRoomCancel);
  }

  get adminRoomAddText(): string | null {
    return this.text(AdminRoomCreateDialogAutomation.AdminRoomAdd);
  }

  setFormError(): void {
    this.fixture.componentInstance.form.setErrors({ invalid: true });
  }

  triggerAdminRoomCancelClick(): void {
    return this.triggerEventHandler(AdminRoomCreateDialogAutomation.AdminRoomCancel, 'click');
  }

  triggerAdminRoomAddClick(): void {
    return this.triggerEventHandler(AdminRoomCreateDialogAutomation.AdminRoomAdd, 'click');
  }
}
