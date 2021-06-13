import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';
import { RoomExtended } from '@app/rooms/manager';

enum AdminRoomsTableAutomation {
  AdminRoomsTable = 'admin-rooms-table',
  AdminRoomsEmpty = 'admin-rooms-empty',
  AdminRoomIdLabel = 'admin-room-id-label',
  AdminRoomIdValue = 'admin-room-id-value',
  AdminRoomPersonLabel = 'admin-room-person-label',
  AdminRoomPersonValue = 'admin-room-person-value',
  AdminRoomBuildingLabel = 'admin-room-building-label',
  AdminRoomBuildingValue = 'admin-room-building-value',
  AdminRoomPriceLabel = 'admin-room-price-label',
  AdminRoomPriceValue = 'admin-room-price-value',
  AdminRoomDescriptionLabel = 'admin-room-description-label',
  AdminRoomDescriptionValue = 'admin-room-description-value',
  AdminRoomCreatedLabel = 'admin-room-created-label',
  AdminRoomCreatedValue = 'admin-room-created-value',
  AdminRoomUpdatedLabel = 'admin-room-updated-label',
  AdminRoomUpdatedValue = 'admin-room-updated-value',
  AdminRoomActionsLabel = 'admin-room-actions-label',
  AdminRoomActionsValue = 'admin-room-actions-value',
}

export class AdminRoomsTableComponentPo<T> extends PageObject<T> {
  get adminRoomsEmptyText(): string | null {
    return this.text(AdminRoomsTableAutomation.AdminRoomsEmpty);
  }

  get adminRoomsTable(): DebugElement | null {
    return this.getByAutomationId(AdminRoomsTableAutomation.AdminRoomsTable);
  }

  get adminRoomIdLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomIdLabel);
  }

  get adminRoomIdValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomIdValue).map((item) => this.textNative(item));
  }

  get adminRoomPersonLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomPersonLabel);
  }

  get adminRoomPersonValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomPersonValue).map((item) => this.textNative(item));
  }

  get adminRoomBuildingLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomBuildingLabel);
  }

  get adminRoomBuildingValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomBuildingValue).map((item) => this.textNative(item));
  }

  get adminRoomPriceLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomPriceLabel);
  }

  get adminRoomPriceValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomPriceValue).map((item) => this.textNative(item));
  }

  get adminRoomDescriptionLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomDescriptionLabel);
  }

  get adminRoomDescriptionValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomDescriptionValue).map((item) => this.textNative(item));
  }

  get adminRoomCreatedLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomCreatedLabel);
  }

  get adminRoomCreatedValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomCreatedValue).map((item) => this.textNative(item));
  }

  get adminRoomUpdatedLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomUpdatedLabel);
  }

  get adminRoomUpdatedValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomUpdatedValue).map((item) => this.textNative(item));
  }

  get adminRoomActionsLabelText(): string | null {
    return this.textNative(AdminRoomsTableAutomation.AdminRoomActionsLabel);
  }

  get adminRoomActionsValueText(): (string | null)[] {
    return this.getAllByAutomationIdNative(AdminRoomsTableAutomation.AdminRoomActionsValue).map((item) => this.textNative(item));
  }

  setData(data: RoomExtended[]): void {
    (this.fixture.componentInstance as any).data = data;
  }
}
