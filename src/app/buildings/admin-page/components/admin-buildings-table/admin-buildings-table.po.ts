import { DebugElement } from '@angular/core';

import { BuildingExtended } from '@app/buildings/manager';
import { PageObject } from '@app/core/testing';

enum AdminBuildingsTableAutomation {
  AdminBuildingsTable = 'admin-buildings-table',
  AdminBuildingsEmpty = 'admin-buildings-empty',
  AdminBuildingIdLabel = 'admin-building-id-label',
  AdminBuildingIdValue = 'admin-building-id-value',
  AdminBuildingNameLabel = 'admin-building-name-label',
  AdminBuildingNameValue = 'admin-building-name-value',
  AdminBuildingCityLabel = 'admin-building-city-label',
  AdminBuildingCityValue = 'admin-building-city-value',
  AdminBuildingAddressLabel = 'admin-building-address-label',
  AdminBuildingAddressValue = 'admin-building-address-value',
  AdminBuildingCreatedLabel = 'admin-building-created-label',
  AdminBuildingCreatedValue = 'admin-building-created-value',
  AdminBuildingUpdatedLabel = 'admin-building-updated-label',
  AdminBuildingUpdatedValue = 'admin-building-updated-value',
  AdminBuildingPersonLabel = 'admin-building-person-label',
  AdminBuildingPersonValue = 'admin-building-person-value',
  AdminBuildingRoomsLabel = 'admin-building-rooms-label',
  AdminBuildingRoomsValue = 'admin-building-rooms-value',
}

export class AdminBuildingsTableComponentPo<T> extends PageObject<T> {
  get adminBuildingsEmptyText(): string | null {
    return this.text(AdminBuildingsTableAutomation.AdminBuildingsEmpty);
  }

  get adminBuildingsTable(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingsTableAutomation.AdminBuildingsTable);
  }

  get adminBuildingIdLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingIdLabel);
  }

  get adminBuildingIdValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingIdValue).map((item) => this.textNative(item));
  }

  get adminBuildingNameLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingNameLabel);
  }

  get adminBuildingNameValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingNameValue).map((item) => this.textNative(item));
  }

  get adminBuildingCityLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingCityLabel);
  }

  get adminBuildingCityValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingCityValue).map((item) => this.textNative(item));
  }

  get adminBuildingAddressLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingAddressLabel);
  }

  get adminBuildingAddressValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingAddressValue).map((item) => this.textNative(item));
  }

  get adminBuildingCreatedLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingCreatedLabel);
  }

  get adminBuildingCreatedValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingCreatedValue).map((item) => this.textNative(item));
  }

  get adminBuildingUpdatedLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingUpdatedLabel);
  }

  get adminBuildingUpdatedValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingUpdatedValue).map((item) => this.textNative(item));
  }

  get adminBuildingRoomsLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingRoomsLabel);
  }

  get adminBuildingRoomsValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingRoomsValue).map((item) => this.textNative(item));
  }

  get adminBuildingPersonLabelText(): string | null {
    return this.textNative(AdminBuildingsTableAutomation.AdminBuildingPersonLabel);
  }

  get adminBuildingPersonValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminBuildingsTableAutomation.AdminBuildingPersonValue).map((item) => this.textNative(item));
  }

  setData(data: BuildingExtended[]): void {
    (this.fixture.componentInstance as any).data = data;
  }
}
