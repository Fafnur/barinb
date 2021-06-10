import { PageObject } from '@app/core/testing';

import { AdminPersonsActionsComponent } from './admin-persons-actions.component';

enum AdminPersonsActionsAutomation {
  AdminPersonsClear = 'admin-persons-clear',
  AdminPersonsAdd = 'admin-persons-add',
}

export class AdminPersonsActionsComponentPo extends PageObject<AdminPersonsActionsComponent> {
  get adminPersonsClearText(): string | null {
    return this.text(AdminPersonsActionsAutomation.AdminPersonsClear);
  }
  get adminPersonsAddText(): string | null {
    return this.text(AdminPersonsActionsAutomation.AdminPersonsAdd);
  }

  triggerAdminPersonsClearClick(): void {
    return this.triggerEventHandler(AdminPersonsActionsAutomation.AdminPersonsClear, 'click');
  }

  triggerAdminPersonsAddClick(): void {
    return this.triggerEventHandler(AdminPersonsActionsAutomation.AdminPersonsAdd, 'click');
  }
}
