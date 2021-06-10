import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-person-middlename.component.spec';

enum AdminPersonMiddlenameAutomation {
  AdminPersonMiddlenameLabel = 'admin-person-middlename-label',
  AdminPersonMiddlenameControl = 'admin-person-middlename-control',
}

export class AdminPersonMiddlenameComponentPo extends PageObject<WrapperComponent> {
  get adminPersonAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminPersonMiddlenameAutomation.AdminPersonMiddlenameControl);
  }

  get adminPersonAddressControlId(): string | null {
    return this.adminPersonAddressControl?.attributes['id'] ?? null;
  }

  get adminPersonAddressLabelText(): string | null {
    return this.text(AdminPersonMiddlenameAutomation.AdminPersonMiddlenameLabel);
  }
}
