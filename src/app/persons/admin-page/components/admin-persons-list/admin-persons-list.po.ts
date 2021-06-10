import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminPersonsListAutomation {
  AdminPersonCard = 'admin-person-card',
}

export class AdminPersonsListComponentPo<T> extends PageObject<T> {
  get adminPersonCards(): DebugElement[] {
    return this.getAllByAutomationId(AdminPersonsListAutomation.AdminPersonCard);
  }
}
