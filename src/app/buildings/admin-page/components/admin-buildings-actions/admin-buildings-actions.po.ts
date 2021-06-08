import { PageObject } from '@app/core/testing';

import { AdminBuildingsActionsComponent } from './admin-buildings-actions.component';

enum AdminBuildingsActionsAutomation {
  AdminBuildingsClear = 'admin-buildings-clear',
  AdminBuildingsAdd = 'admin-buildings-add',
}

export class AdminBuildingsActionsComponentPo extends PageObject<AdminBuildingsActionsComponent> {
  get adminBuildingsClearText(): string | null {
    return this.text(AdminBuildingsActionsAutomation.AdminBuildingsClear);
  }
  get adminBuildingsAddText(): string | null {
    return this.text(AdminBuildingsActionsAutomation.AdminBuildingsAdd);
  }

  triggerAdminBuildingsClearClick(): void {
    return this.triggerEventHandler(AdminBuildingsActionsAutomation.AdminBuildingsClear, 'click');
  }

  triggerAdminBuildingsAddClick(): void {
    return this.triggerEventHandler(AdminBuildingsActionsAutomation.AdminBuildingsAdd, 'click');
  }
}
