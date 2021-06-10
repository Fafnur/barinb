import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-person-form.component.spec';

enum PersonAdminFormAutomation {
  AdminPersonLastname = 'admin-person-lastname',
  AdminPersonFirstname = 'admin-person-firstname',
  AdminPersonMiddlename = 'admin-person-middlename',
  AdminPersonPhone = 'admin-person-phone',
  AdminPersonAvatar = 'admin-person-avatar',
}

export class PersonAdminFormComponentPo extends PageObject<WrapperComponent> {
  get adminPersonLastname(): DebugElement | null {
    return this.getByAutomationId(PersonAdminFormAutomation.AdminPersonLastname);
  }

  get adminPersonFirstname(): DebugElement | null {
    return this.getByAutomationId(PersonAdminFormAutomation.AdminPersonFirstname);
  }

  get adminPersonMiddlename(): DebugElement | null {
    return this.getByAutomationId(PersonAdminFormAutomation.AdminPersonMiddlename);
  }

  get adminPersonPhone(): DebugElement | null {
    return this.getByAutomationId(PersonAdminFormAutomation.AdminPersonPhone);
  }

  get adminPersonAvatar(): DebugElement | null {
    return this.getByAutomationId(PersonAdminFormAutomation.AdminPersonAvatar);
  }
}
