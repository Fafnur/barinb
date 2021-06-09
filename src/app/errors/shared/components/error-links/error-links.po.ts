import { PageObject } from '@app/core/testing';

import { ErrorLinksComponent } from './error-links.component';

enum ErrorLinksAutomation {
  ErrorLinkRent = 'error-link-rent',
  ErrorLinkAdmin = 'error-link-admin',
  ErrorLinkHome = 'error-link-home',
}

export class ErrorLinksComponentPo extends PageObject<ErrorLinksComponent> {
  get errorLinkRentText(): string | null {
    return this.text(ErrorLinksAutomation.ErrorLinkRent);
  }

  get errorLinkAdminText(): string | null {
    return this.text(ErrorLinksAutomation.ErrorLinkAdmin);
  }

  get errorLinkHomeText(): string | null {
    return this.text(ErrorLinksAutomation.ErrorLinkHome);
  }
}
