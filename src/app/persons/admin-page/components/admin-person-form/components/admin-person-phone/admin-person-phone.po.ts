import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-person-phone.component.spec';

enum AdminPersonPhoneAutomation {
  AdminPersonPhoneLabel = 'admin-person-phone-label',
  AdminPersonPhoneControl = 'admin-person-phone-control',
}

export class AdminPersonPhoneComponentPo extends PageObject<WrapperComponent> {
  get adminPersonAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminPersonPhoneAutomation.AdminPersonPhoneControl);
  }

  get adminPersonAddressControlId(): string | null {
    return this.adminPersonAddressControl?.attributes['id'] ?? null;
  }

  get adminPersonAddressLabelText(): string | null {
    return this.text(AdminPersonPhoneAutomation.AdminPersonPhoneLabel);
  }
}
