import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-person.component.spec';

enum AdminBuildingPersonAutomation {
  AdminBuildingPersonLabel = 'admin-building-person-label',
  AdminBuildingPersonControl = 'admin-building-person-control',
  AdminBuildingPersonAvatar = 'admin-building-person-avatar',
  AdminBuildingPersonName = 'admin-building-person-name',
}

export class AdminBuildingPersonComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingPersonControl(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingPersonAutomation.AdminBuildingPersonControl);
  }

  get adminBuildingPersonControlId(): string | null {
    return this.adminBuildingPersonControl?.attributes['id'] ?? null;
  }

  get adminBuildingPersonLabelText(): string | null {
    return this.text(AdminBuildingPersonAutomation.AdminBuildingPersonLabel);
  }

  get adminBuildingPersonAvatars(): any[] {
    return this.getAllByAutomationIdNative(AdminBuildingPersonAutomation.AdminBuildingPersonAvatar);
  }
}
