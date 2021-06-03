import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminMenuLinkAutomation {
  AdminMenuLink = 'admin-menu-link-inner',
}

export class AdminMenuLinkComponentPo<T> extends PageObject<T> {
  get adminMenuLink(): DebugElement | null {
    return this.getByAutomationId(AdminMenuLinkAutomation.AdminMenuLink);
  }

  get adminMenuLinkHref(): string | null {
    return this.adminMenuLink?.properties['href'] ?? null;
  }

  get adminMenuLinkText(): string | null {
    return this.text(AdminMenuLinkAutomation.AdminMenuLink);
  }
}
