import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-person-avatar.component.spec';

enum AdminPersonAvatarAutomation {
  AdminPersonAvatarLabel = 'admin-person-avatar-label',
  AdminPersonAvatarControl = 'admin-person-avatar-control',
}

export class AdminPersonAvatarComponentPo extends PageObject<WrapperComponent> {
  get adminPersonAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminPersonAvatarAutomation.AdminPersonAvatarControl);
  }

  get adminPersonAddressControlId(): string | null {
    return this.adminPersonAddressControl?.attributes['id'] ?? null;
  }

  get adminPersonAddressLabelText(): string | null {
    return this.text(AdminPersonAvatarAutomation.AdminPersonAvatarLabel);
  }
}
