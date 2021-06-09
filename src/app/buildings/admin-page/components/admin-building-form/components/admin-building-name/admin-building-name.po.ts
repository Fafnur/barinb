import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-building-name.component.spec';

enum AdminBuildingNameAutomation {
  AdminBuildingNameLabel = 'admin-building-name-label',
  AdminBuildingNameControl = 'admin-building-name-control',
}

export class AdminBuildingNameComponentPo extends PageObject<WrapperComponent> {
  get adminBuildingNameControl(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingNameAutomation.AdminBuildingNameControl);
  }

  get adminBuildingNameControlId(): string | null {
    return this.adminBuildingNameControl?.attributes['id'] ?? null;
  }

  get adminBuildingNameLabelText(): string | null {
    return this.text(AdminBuildingNameAutomation.AdminBuildingNameLabel);
  }
}
