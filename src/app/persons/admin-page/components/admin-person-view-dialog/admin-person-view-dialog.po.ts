import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { AdminPersonViewDialogComponent } from './admin-person-view-dialog.component';

enum AdminPersonViewDialogAutomation {
  AdminPersonNameLabel = 'admin-person-name-label',
  AdminPersonNameValue = 'admin-person-name-value',
  AdminPersonPhoneLabel = 'admin-person-phone-label',
  AdminPersonPhoneValue = 'admin-person-phone-value',
  AdminPersonAvatarLabel = 'admin-person-avatar-label',
  AdminPersonAvatarValue = 'admin-person-avatar-value',
  AdminPersonBuildingsLabel = 'admin-person-buildings-label',
  AdminPersonBuildingsValue = 'admin-person-buildings-value',
  AdminPersonClose = 'admin-person-close',
}

export class AdminPersonViewDialogComponentPo extends PageObject<AdminPersonViewDialogComponent> {
  get adminPersonNameLabelText(): string | null {
    return this.text(AdminPersonViewDialogAutomation.AdminPersonNameLabel);
  }

  get adminPersonNameValueText(): string | null {
    return this.text(AdminPersonViewDialogAutomation.AdminPersonNameValue);
  }

  get adminPersonPhoneLabelText(): string | null {
    return this.text(AdminPersonViewDialogAutomation.AdminPersonPhoneLabel);
  }

  get adminPersonPhoneValueText(): string | null {
    return this.text(AdminPersonViewDialogAutomation.AdminPersonPhoneValue);
  }

  get adminPersonAvatarLabelText(): string | null {
    return this.text(AdminPersonViewDialogAutomation.AdminPersonAvatarLabel);
  }

  get adminPersonAvatarValueSrc(): string | null {
    return this.getByAutomationId(AdminPersonViewDialogAutomation.AdminPersonAvatarValue)?.properties['src'] ?? null;
  }

  get adminPersonBuildingsLabelText(): string | null {
    return this.text(AdminPersonViewDialogAutomation.AdminPersonBuildingsLabel);
  }

  get adminPersonBuildingsValue(): DebugElement[] {
    return this.getAllByAutomationId(AdminPersonViewDialogAutomation.AdminPersonBuildingsValue);
  }

  triggerAdminPersonCloseClick(): void {
    return this.triggerEventHandler(AdminPersonViewDialogAutomation.AdminPersonClose, 'click');
  }
}
