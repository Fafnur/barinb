import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminBuildingActionsAutomation {
  AdminBuildingView = 'admin-building-view',
  AdminBuildingEdit = 'admin-building-edit',
  AdminBuildingRemove = 'admin-building-remove',
}

export class AdminBuildingActionsComponentPo<T> extends PageObject<T> {
  get adminBuildingView(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingActionsAutomation.AdminBuildingView) ?? null;
  }

  get adminBuildingEdit(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingActionsAutomation.AdminBuildingEdit) ?? null;
  }

  get adminBuildingRemove(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingActionsAutomation.AdminBuildingRemove) ?? null;
  }

  triggerAdminBuildingViewClick(): void {
    return this.triggerEventHandler(this.adminBuildingView, 'click');
  }

  triggerAdminBuildingEditClick(): void {
    return this.triggerEventHandler(this.adminBuildingEdit, 'click');
  }

  triggerAdminBuildingRemoveClick(): void {
    return this.triggerEventHandler(this.adminBuildingRemove, 'click');
  }
}
