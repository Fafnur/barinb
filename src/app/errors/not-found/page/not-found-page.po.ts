import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';

enum NotFoundPageAutomation {
  ErrorLogo = 'error-logo',
  ErrorStatus = 'error-status',
  ErrorTitle = 'error-title',
  ErrorHint = 'error-hint',
  ErrorLinks = 'error-links',
  ErrorApplication = 'error-application',
}

export class NotFoundPageComponentPo extends PageObject<NotFoundPageComponent> {
  get errorLogo(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.ErrorLogo);
  }

  get errorStatusText(): string | null {
    return this.text(NotFoundPageAutomation.ErrorStatus);
  }

  get errorTitleText(): string | null {
    return this.text(NotFoundPageAutomation.ErrorTitle);
  }

  get errorHintText(): string | null {
    return this.text(NotFoundPageAutomation.ErrorHint);
  }

  get errorLinks(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.ErrorLinks);
  }

  get errorApplication(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.ErrorApplication);
  }
}
