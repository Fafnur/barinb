import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PlatformService } from '@app/core/platform';

@Injectable({
  providedIn: 'root',
})
export class FormErrorsService {
  constructor(private readonly platformService: PlatformService, @Inject(DOCUMENT) private readonly document: Document) {}

  scrollToFirstError(form: FormGroup, ids: Record<string, string>): void {
    if (this.platformService.isBrowser && form?.controls) {
      for (const key of Object.keys(form.controls)) {
        const control = form.get(key);

        if (control?.errors && Object.values(control.errors).length) {
          const fieldId = ids[key];
          const element = this.document.getElementById(fieldId);
          if (element) {
            element.scrollIntoView({ block: 'center', behavior: 'smooth' });
            element.focus({ preventScroll: true });
            break;
          }
        }
      }
    }
  }
}
