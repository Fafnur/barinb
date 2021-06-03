import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { BuildingAdminPageComponent } from './building-admin-page.component';

enum BuildingAdminPageAutomation {
  AdminBuildingsActions = 'admin-buildings-actions',
  AdminBuildingsTable = 'admin-buildings-table',
  AdminBuildingsList = 'admin-buildings-list',
}

export class BuildingAdminPageComponentPo extends PageObject<BuildingAdminPageComponent> {
  get adminBuildingsActions(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminPageAutomation.AdminBuildingsActions) ?? null;
  }

  get adminBuildingsTable(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminPageAutomation.AdminBuildingsTable) ?? null;
  }

  get adminBuildingsList(): DebugElement | null {
    return this.getByAutomationId(BuildingAdminPageAutomation.AdminBuildingsList) ?? null;
  }

  get isDesktopScreen(): boolean {
    return this.fixture.componentInstance.isDesktopScreen;
  }
}
