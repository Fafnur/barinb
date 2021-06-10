import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { RoomPageComponent } from './room-page.component';

enum RoomPageAutomation {
  RoomHeader = 'room-header',
  RoomDetails = 'room-details',
  RoomPhoto = 'room-photo',
  RoomPerson = 'room-person',
  RoomProps = 'room-props',
  RoomFeatures = 'room-features',
  RoomDescription = 'room-description',
  RoomCard = 'room-card',
}

export class RoomPageComponentPo extends PageObject<RoomPageComponent> {
  get roomHeader(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomHeader);
  }

  get roomDetails(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomDetails);
  }

  get roomPhoto(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomPhoto);
  }

  get roomPerson(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomPerson);
  }

  get roomProps(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomProps);
  }

  get roomFeatures(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomFeatures);
  }

  get roomDescription(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomDescription);
  }

  get roomCard(): DebugElement | null {
    return this.getByAutomationId(RoomPageAutomation.RoomCard);
  }
}
