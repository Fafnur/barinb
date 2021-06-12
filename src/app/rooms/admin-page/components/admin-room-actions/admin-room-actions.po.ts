import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-actions.component.spec';

enum AdminRoomActionsAutomation {
  AdminRoomView = 'admin-room-view',
  AdminRoomEdit = 'admin-room-edit',
  AdminRoomRemove = 'admin-room-remove',
}

export class AdminRoomActionsComponentPo extends PageObject<WrapperComponent> {
  get adminRoomView(): DebugElement | null {
    return this.getByAutomationId(AdminRoomActionsAutomation.AdminRoomView) ?? null;
  }

  get adminRoomEdit(): DebugElement | null {
    return this.getByAutomationId(AdminRoomActionsAutomation.AdminRoomEdit) ?? null;
  }

  get adminRoomRemove(): DebugElement | null {
    return this.getByAutomationId(AdminRoomActionsAutomation.AdminRoomRemove) ?? null;
  }

  triggerAdminRoomViewClick(): void {
    return this.triggerEventHandler(this.adminRoomView, 'click');
  }

  triggerAdminRoomEditClick(): void {
    return this.triggerEventHandler(this.adminRoomEdit, 'click');
  }

  triggerAdminRoomRemoveClick(): void {
    return this.triggerEventHandler(this.adminRoomRemove, 'click');
  }
}
