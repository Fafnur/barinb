import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminLayoutComponent } from './admin-layout.component';

enum AdminLayoutAutomation {
  AdminDesktopMenu = 'admin-desktop-menu',
  AdminMobileMenu = 'admin-mobile-menu',
}

export class AdminLayoutComponentPo extends PageObject<AdminLayoutComponent> {
  get adminDesktopMenu(): DebugElement | null {
    return this.getByAutomationId(AdminLayoutAutomation.AdminDesktopMenu);
  }

  get adminMobileMenu(): DebugElement | null {
    return this.getByAutomationId(AdminLayoutAutomation.AdminMobileMenu);
  }

  get isDesktopScreen(): boolean {
    return this.fixture.componentInstance.isDesktopScreen;
  }
}
