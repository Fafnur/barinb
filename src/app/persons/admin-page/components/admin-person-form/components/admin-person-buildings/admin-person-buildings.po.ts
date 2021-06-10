import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-person-buildings.component.spec';

enum AdminPersonBuildingsAutomation {
  AdminPersonBuildingsLabel = 'admin-person-buildings-label',
  AdminPersonBuildingsControl = 'admin-person-buildings-control',
}

export class AdminPersonBuildingsComponentPo extends PageObject<WrapperComponent> {
  get adminPersonAddressControl(): DebugElement | null {
    return this.getByAutomationId(AdminPersonBuildingsAutomation.AdminPersonBuildingsControl);
  }

  get adminPersonAddressControlId(): string | null {
    return this.adminPersonAddressControl?.attributes['id'] ?? null;
  }

  get adminPersonAddressLabelText(): string | null {
    return this.text(AdminPersonBuildingsAutomation.AdminPersonBuildingsLabel);
  }
}
