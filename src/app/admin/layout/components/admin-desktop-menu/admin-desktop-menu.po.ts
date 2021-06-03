import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminDesktopMenuComponent } from './admin-desktop-menu.component';

enum AdminDesktopMenuAutomation {
  AdminMenuLink = 'admin-menu-link',
}

export class AdminDesktopMenuComponentPo extends PageObject<AdminDesktopMenuComponent> {
  get adminMenuLinks(): DebugElement[] {
    return this.getAllByAutomationId(AdminDesktopMenuAutomation.AdminMenuLink);
  }
}
