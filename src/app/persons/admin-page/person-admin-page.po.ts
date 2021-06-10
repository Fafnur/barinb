import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { PersonAdminPageComponent } from './person-admin-page.component';

enum PersonAdminPageAutomation {
  AdminPersonsActions = 'admin-persons-actions',
  AdminPersonsTable = 'admin-persons-table',
  AdminPersonsList = 'admin-persons-list',
}

export class PersonAdminPageComponentPo extends PageObject<PersonAdminPageComponent> {
  get adminPersonsActions(): DebugElement | null {
    return this.getByAutomationId(PersonAdminPageAutomation.AdminPersonsActions) ?? null;
  }

  get adminPersonsTable(): DebugElement | null {
    return this.getByAutomationId(PersonAdminPageAutomation.AdminPersonsTable) ?? null;
  }

  get adminPersonsList(): DebugElement | null {
    return this.getByAutomationId(PersonAdminPageAutomation.AdminPersonsList) ?? null;
  }

  get isDesktopScreen(): boolean {
    return this.fixture.componentInstance.isDesktopScreen;
  }
}
