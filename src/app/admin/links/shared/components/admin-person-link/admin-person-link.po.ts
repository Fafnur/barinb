import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminPersonLinkAutomation {
  AdminPersonLink = 'admin-person-link',
}

export class AdminPersonLinkComponentPo<T> extends PageObject<T> {
  get adminPersonLink(): DebugElement | null {
    return this.getByAutomationId(AdminPersonLinkAutomation.AdminPersonLink);
  }

  get adminPersonLinkHref(): string | null {
    return this.adminPersonLink?.properties['href'] ?? null;
  }

  get adminPersonLinkText(): string | null {
    return this.text(AdminPersonLinkAutomation.AdminPersonLink);
  }
}
