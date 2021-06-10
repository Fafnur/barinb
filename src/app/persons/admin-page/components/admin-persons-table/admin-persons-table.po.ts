import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';
import { PersonExtended } from '@app/persons/manager';

enum AdminPersonsTableAutomation {
  AdminPersonsTable = 'admin-persons-table',
  AdminPersonsEmpty = 'admin-persons-empty',
  AdminPersonIdLabel = 'admin-person-id-label',
  AdminPersonIdValue = 'admin-person-id-value',
  AdminPersonLastnameLabel = 'admin-person-lastname-label',
  AdminPersonLastnameValue = 'admin-person-lastname-value',
  AdminPersonFirstnameLabel = 'admin-person-firstname-label',
  AdminPersonFirstnameValue = 'admin-person-firstname-value',
  AdminPersonMiddlenameLabel = 'admin-person-middlename-label',
  AdminPersonMiddlenameValue = 'admin-person-middlename-value',
  AdminPersonPhoneLabel = 'admin-person-phone-label',
  AdminPersonPhoneValue = 'admin-person-phone-value',
  AdminPersonCreatedLabel = 'admin-person-created-label',
  AdminPersonCreatedValue = 'admin-person-created-value',
  AdminPersonUpdatedLabel = 'admin-person-updated-label',
  AdminPersonUpdatedValue = 'admin-person-updated-value',
  AdminPersonActionsLabel = 'admin-person-actions-label',
  AdminPersonActionsValue = 'admin-person-actions-value',
}

export class AdminPersonsTableComponentPo<T> extends PageObject<T> {
  get adminPersonsEmptyText(): string | null {
    return this.text(AdminPersonsTableAutomation.AdminPersonsEmpty);
  }

  get adminPersonsTable(): DebugElement | null {
    return this.getByAutomationId(AdminPersonsTableAutomation.AdminPersonsTable);
  }

  get adminPersonIdLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonIdLabel);
  }

  get adminPersonIdValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonIdValue).map((item) => this.textNative(item));
  }

  get adminPersonLastnameLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonLastnameLabel);
  }

  get adminPersonLastnameValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonLastnameValue).map((item) => this.textNative(item));
  }

  get adminPersonFirstnameLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonFirstnameLabel);
  }

  get adminPersonFirstnameValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonFirstnameValue).map((item) => this.textNative(item));
  }

  get adminPersonMiddlenameLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonMiddlenameLabel);
  }

  get adminPersonMiddlenameValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonMiddlenameValue).map((item) => this.textNative(item));
  }

  get adminPersonPhoneLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonPhoneLabel);
  }

  get adminPersonPhoneValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonPhoneValue).map((item) => this.textNative(item));
  }

  get adminPersonCreatedLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonCreatedLabel);
  }

  get adminPersonCreatedValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonCreatedValue).map((item) => this.textNative(item));
  }

  get adminPersonUpdatedLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonUpdatedLabel);
  }

  get adminPersonUpdatedValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonUpdatedValue).map((item) => this.textNative(item));
  }

  get adminPersonActionsLabelText(): string | null {
    return this.textNative(AdminPersonsTableAutomation.AdminPersonActionsLabel);
  }

  get adminPersonActionsValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminPersonsTableAutomation.AdminPersonActionsValue).map((item) => this.textNative(item));
  }

  setData(data: PersonExtended[]): void {
    (this.fixture.componentInstance as any).data = data;
  }
}
