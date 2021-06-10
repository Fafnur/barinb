import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-person-lastname.component.spec';

enum AdminPersonLastnameAutomation {
  AdminPersonLastnameLabel = 'admin-person-lastname-label',
  AdminPersonLastnameControl = 'admin-person-lastname-control',
}

export class AdminPersonLastnameComponentPo extends PageObject<WrapperComponent> {
  get adminPersonAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminPersonLastnameAutomation.AdminPersonLastnameControl);
  }

  get adminPersonAddressControlId(): string | null {
    return this.adminPersonAddressControl?.attributes['id'] ?? null;
  }

  get adminPersonAddressLabelText(): string | null {
    return this.text(AdminPersonLastnameAutomation.AdminPersonLastnameLabel);
  }
}
