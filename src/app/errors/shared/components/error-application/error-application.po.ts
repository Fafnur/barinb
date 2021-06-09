import { PageObject } from '@app/core/testing';

import { ErrorApplicationComponent } from './error-application.component';

enum ErrorApplicationAutomation {
  ErrorApplicationImage = 'error-application-image',
  ErrorApplicationTitle = 'error-application-title',
  ErrorApplicationHint = 'error-application-hint',
  ErrorApplicationQrcode = 'error-application-qrcode',
  ErrorApplicationApple = 'error-application-apple',
  ErrorApplicationGoogle = 'error-application-google',
  ErrorApplicationDownload = 'error-application-download',
}

export class ErrorApplicationComponentPo extends PageObject<ErrorApplicationComponent> {
  get errorApplicationImageSrc(): string | null {
    return this.getByAutomationId(ErrorApplicationAutomation.ErrorApplicationImage)?.attributes['src'] ?? null;
  }

  get errorApplicationTitleText(): string | null {
    return this.text(ErrorApplicationAutomation.ErrorApplicationTitle);
  }

  get errorApplicationHintText(): string | null {
    return this.text(ErrorApplicationAutomation.ErrorApplicationHint);
  }

  get errorApplicationQrcodeSrc(): string | null {
    return this.getByAutomationId(ErrorApplicationAutomation.ErrorApplicationQrcode)?.attributes['src'] ?? null;
  }

  get errorApplicationAppleText(): string | null {
    return this.text(ErrorApplicationAutomation.ErrorApplicationApple);
  }

  get errorApplicationGoogleText(): string | null {
    return this.text(ErrorApplicationAutomation.ErrorApplicationGoogle);
  }

  get errorApplicationDownloadText(): string | null {
    return this.text(ErrorApplicationAutomation.ErrorApplicationDownload);
  }
}
