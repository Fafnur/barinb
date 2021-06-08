import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminBuildingsListAutomation {
  AdminBuildingCard = 'admin-building-card',
}

export class AdminBuildingsListComponentPo<T> extends PageObject<T> {
  get adminBuildingCards(): DebugElement[] {
    return this.getAllByAutomationId(AdminBuildingsListAutomation.AdminBuildingCard);
  }
}
