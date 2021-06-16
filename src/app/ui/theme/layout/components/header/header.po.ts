import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { HeaderComponent } from './header.component';

enum HeaderAutomation {
  HeaderLogo = 'header-logo',
  HeaderBrand = 'header-brand',
  HeaderLinkHome = 'header-link-home',
  HeaderLinkAdmin = 'header-link-admin',
  HeaderLinkHelp = 'header-link-help',
}

export class HeaderComponentPo extends PageObject<HeaderComponent> {
  get headerLogo(): DebugElement | null {
    return this.getByAutomationId(HeaderAutomation.HeaderLogo);
  }

  get headerBrand(): string | null {
    return this.text(HeaderAutomation.HeaderBrand);
  }

  get headerLinkHomeText(): string | null {
    return this.text(HeaderAutomation.HeaderLinkHome);
  }

  get headerLinkAdminText(): string | null {
    return this.text(HeaderAutomation.HeaderLinkAdmin);
  }

  get headerLinkHelpText(): string | null {
    return this.text(HeaderAutomation.HeaderLinkHelp);
  }

  triggerHeaderLinkHelpClick(): void {
    this.triggerEventHandler(HeaderAutomation.HeaderLinkHelp, 'click');
  }
}
