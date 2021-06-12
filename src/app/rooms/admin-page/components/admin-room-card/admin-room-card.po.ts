import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminRoomCardAutomation {
  AdminRoomCardAvatar = 'admin-room-card-avatar',
  AdminRoomCardTitle = 'admin-room-card-title',
  AdminRoomCardSubtitle = 'admin-room-card-subtitle',
  AdminRoomCardCarousel = 'admin-room-card-carousel',
  AdminRoomCardDescription = 'admin-room-card-description',
  AdminRoomCardPrice = 'admin-room-card-price',
  AdminRoomCardCreated = 'admin-room-card-created',
  AdminRoomActions = 'admin-room-actions',
}

export class AdminRoomCardComponentPo<T> extends PageObject<T> {
  get adminRoomCardAvatar(): DebugElement | null {
    return this.getByAutomationId(AdminRoomCardAutomation.AdminRoomCardAvatar) ?? null;
  }

  get adminRoomCardAvatarStyles(): Record<string, any> | null {
    return this.adminRoomCardAvatar?.styles ?? null;
  }

  get adminRoomCardAvatarHref(): string | null {
    return this.adminRoomCardAvatar?.properties['href'] ?? null;
  }

  get adminRoomCardTitleText(): string | null {
    return this.text(AdminRoomCardAutomation.AdminRoomCardTitle);
  }

  get adminRoomCardSubtitleText(): string | null {
    return this.text(AdminRoomCardAutomation.AdminRoomCardSubtitle);
  }

  get adminRoomCardCarousel(): DebugElement | null {
    return this.getByAutomationId(AdminRoomCardAutomation.AdminRoomCardCarousel);
  }

  get adminRoomCardCarouselImages(): string | null {
    return this.adminRoomCardCarousel?.attributes['ng-reflect-images'] ?? null;
  }

  get adminRoomCardDescriptionText(): string | null {
    return this.text(AdminRoomCardAutomation.AdminRoomCardDescription);
  }

  get adminRoomCardPriceText(): string | null {
    return this.text(AdminRoomCardAutomation.AdminRoomCardPrice);
  }

  get adminRoomCardCreatedText(): string | null {
    return this.text(AdminRoomCardAutomation.AdminRoomCardCreated);
  }

  get adminRoomActions(): DebugElement | null {
    return this.getByAutomationId(AdminRoomCardAutomation.AdminRoomActions);
  }
}
