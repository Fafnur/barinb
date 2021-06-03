import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminMobileMenuComponent } from './admin-mobile-menu.component';

enum AdminMobileMenuAutomation {
  AdminMobileMenuLink = 'admin-mobile-menu-link',
}

export class AdminMobileMenuComponentPo extends PageObject<AdminMobileMenuComponent> {
  get adminMobileMenuLinks(): DebugElement[] {
    return this.getAllByAutomationId(AdminMobileMenuAutomation.AdminMobileMenuLink);
  }

  get adminMenuLinksHref(): string[] {
    return this.adminMobileMenuLinks.map((link) => link.properties['href']);
  }

  get adminMenuLinksText(): string[] {
    return this.adminMobileMenuLinks.map((link) => link.nativeElement.textContent.trim());
  }
}
