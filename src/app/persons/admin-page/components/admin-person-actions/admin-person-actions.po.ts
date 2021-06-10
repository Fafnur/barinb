import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminPersonActionsAutomation {
  AdminPersonView = 'admin-person-view',
  AdminPersonEdit = 'admin-person-edit',
  AdminPersonRemove = 'admin-person-remove',
}

export class AdminPersonActionsComponentPo<T> extends PageObject<T> {
  get adminPersonView(): DebugElement | null {
    return this.getByAutomationId(AdminPersonActionsAutomation.AdminPersonView) ?? null;
  }

  get adminPersonEdit(): DebugElement | null {
    return this.getByAutomationId(AdminPersonActionsAutomation.AdminPersonEdit) ?? null;
  }

  get adminPersonRemove(): DebugElement | null {
    return this.getByAutomationId(AdminPersonActionsAutomation.AdminPersonRemove) ?? null;
  }

  triggerAdminPersonViewClick(): void {
    return this.triggerEventHandler(this.adminPersonView, 'click');
  }

  triggerAdminPersonEditClick(): void {
    return this.triggerEventHandler(this.adminPersonEdit, 'click');
  }

  triggerAdminPersonRemoveClick(): void {
    return this.triggerEventHandler(this.adminPersonRemove, 'click');
  }
}
