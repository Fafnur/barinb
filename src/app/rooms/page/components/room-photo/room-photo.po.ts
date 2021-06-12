import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-photo.component.spec';

enum RoomPhotoAutomation {
  RoomPhotos = 'room-photos',
  RoomPhotosCarousel = 'room-photos-carousel',
  RoomPhotoSource = 'room-photo-source',
  RoomPhotoBox = 'room-photo-box',
  RoomPhotoPreview = 'room-photo-preview',
  RoomPhotoShow = 'room-photo-show',
}

export class RoomPhotoComponentPo extends PageObject<WrapperComponent> {
  get roomPhotos(): DebugElement | null {
    return this.getByAutomationId(RoomPhotoAutomation.RoomPhotos);
  }

  get roomPhotosCarousel(): DebugElement | null {
    return this.getByAutomationId(RoomPhotoAutomation.RoomPhotosCarousel);
  }

  get roomPhotoSourceSrc(): DebugElement | null {
    return this.getByAutomationId(RoomPhotoAutomation.RoomPhotoSource)?.properties['src'] ?? null;
  }

  get roomPhotoBox(): DebugElement[] {
    return this.getAllByAutomationId(RoomPhotoAutomation.RoomPhotoBox);
  }

  get roomPhotoPreviewFirstStyles(): Record<string, any> | null {
    return this.getByAutomationId(RoomPhotoAutomation.RoomPhotoPreview)?.styles ?? null;
  }

  triggerRoomPhotoShowClick(): void {
    return this.triggerEventHandler(RoomPhotoAutomation.RoomPhotoShow, 'click');
  }
}
