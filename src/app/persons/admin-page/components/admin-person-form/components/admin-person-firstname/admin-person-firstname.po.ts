import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-person-firstname.component.spec';

enum AdminPersonFirstnameAutomation {
  AdminPersonFirstnameLabel = 'admin-person-firstname-label',
  AdminPersonFirstnameControl = 'admin-person-firstname-control',
}

export class AdminPersonFirstnameComponentPo extends PageObject<WrapperComponent> {
  get adminPersonAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminPersonFirstnameAutomation.AdminPersonFirstnameControl);
  }

  get adminPersonAddressControlId(): string | null {
    return this.adminPersonAddressControl?.attributes['id'] ?? null;
  }

  get adminPersonAddressLabelText(): string | null {
    return this.text(AdminPersonFirstnameAutomation.AdminPersonFirstnameLabel);
  }
}
