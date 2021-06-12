import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './admin-room-form.component.spec';

enum RoomAdminFormAutomation {
  AdminRoomPerson = 'admin-room-person',
  AdminRoomBuilding = 'admin-room-building',
  AdminRoomPrice = 'admin-room-price',
  AdminRoomGuests = 'admin-room-guests',
  AdminRoomBedrooms = 'admin-room-bedrooms',
  AdminRoomBeds = 'admin-room-beds',
  AdminRoomBathrooms = 'admin-room-bathrooms',
  AdminRoomAmenities = 'admin-room-amenities',
  AdminRoomPhotos = 'admin-room-photos',
  AdminRoomDescription = 'admin-room-description',
}

export class RoomAdminFormComponentPo extends PageObject<WrapperComponent> {
  get adminRoomPerson(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomPerson);
  }

  get adminRoomBuilding(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomBuilding);
  }

  get adminRoomPrice(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomPrice);
  }

  get adminRoomGuests(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomGuests);
  }

  get adminRoomBedrooms(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomBedrooms);
  }

  get adminRoomBeds(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomBeds);
  }

  get adminRoomBathrooms(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomBathrooms);
  }

  get adminRoomAmenities(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomAmenities);
  }

  get adminRoomPhotos(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomPhotos);
  }

  get adminRoomDescription(): DebugElement | null {
    return this.getByAutomationId(RoomAdminFormAutomation.AdminRoomDescription);
  }
}
