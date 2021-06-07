import { PageObject } from '@app/core/testing';

import { AdminBuildingViewDialogComponent } from './admin-building-view-dialog.component';

enum AdminBuildingViewDialogAutomation {
  AdminBuildingNameLabel = 'admin-building-name-label',
  AdminBuildingNameValue = 'admin-building-name-value',
  AdminBuildingPersonLabel = 'admin-building-person-label',
  AdminBuildingPersonValue = 'admin-building-person-value',
  AdminBuildingCityLabel = 'admin-building-city-label',
  AdminBuildingCityValue = 'admin-building-city-value',
  AdminBuildingAddressLabel = 'admin-building-address-label',
  AdminBuildingAddressValue = 'admin-building-address-value',
  AdminBuildingCoordsLabel = 'admin-building-coords-label',
  AdminBuildingCoordsValue = 'admin-building-coords-value',
  AdminBuildingRoomsLabel = 'admin-building-rooms-label',
  AdminBuildingRoomsValue = 'admin-building-rooms-value',
  AdminBuildingCreatedLabel = 'admin-building-created-label',
  AdminBuildingCreatedValue = 'admin-building-created-value',
  AdminBuildingUpdatedLabel = 'admin-building-updated-label',
  AdminBuildingUpdatedValue = 'admin-building-updated-value',
  AdminBuildingClose = 'admin-building-close',
}

export class AdminBuildingViewDialogComponentPo extends PageObject<AdminBuildingViewDialogComponent> {
  get adminBuildingNameLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingNameLabel);
  }

  get adminBuildingNameValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingNameValue);
  }

  get adminBuildingPersonLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingPersonLabel);
  }

  get adminBuildingPersonValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingPersonValue);
  }

  get adminBuildingCityLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingCityLabel);
  }

  get adminBuildingCityValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingCityValue);
  }

  get adminBuildingAddressLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingAddressLabel);
  }

  get adminBuildingAddressValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingAddressValue);
  }

  get adminBuildingCoordsLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingCoordsLabel);
  }

  get adminBuildingCoordsValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingCoordsValue);
  }

  get adminBuildingRoomsLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingRoomsLabel);
  }

  get adminBuildingRoomsValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingRoomsValue);
  }

  get adminBuildingCreatedLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingCreatedLabel);
  }

  get adminBuildingCreatedValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingCreatedValue);
  }

  get adminBuildingUpdatedLabelText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingUpdatedLabel);
  }

  get adminBuildingUpdatedValueText(): string | null {
    return this.text(AdminBuildingViewDialogAutomation.AdminBuildingUpdatedValue);
  }

  triggerAdminBuildingCloseClick(): void {
    return this.triggerEventHandler(AdminBuildingViewDialogAutomation.AdminBuildingClose, 'click');
  }
}
