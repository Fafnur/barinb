import { PageObject } from '@app/core/testing';

import { ErrorLogoComponent } from './error-logo.component';

enum ErrorLogoAutomation {
  ErrorBrand = 'error-brand',
}

export class ErrorLogoComponentPo extends PageObject<ErrorLogoComponent> {
  get errorBrandText(): string | null {
    return this.text(ErrorLogoAutomation.ErrorBrand);
  }
}
