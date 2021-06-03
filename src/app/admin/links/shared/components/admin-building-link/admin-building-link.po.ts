import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminBuildingLinkAutomation {
  AdminBuildingLink = 'admin-building-link',
}

export class AdminBuildingLinkComponentPo<T> extends PageObject<T> {
  get adminBuildingLink(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingLinkAutomation.AdminBuildingLink);
  }

  get adminBuildingLinkHref(): string | null {
    return this.adminBuildingLink?.properties['href'] ?? null;
  }

  get adminBuildingLinkText(): string | null {
    return this.text(AdminBuildingLinkAutomation.AdminBuildingLink);
  }
}
