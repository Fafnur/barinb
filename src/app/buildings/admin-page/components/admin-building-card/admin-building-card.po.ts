import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminBuildingCardAutomation {
  AdminBuildingCardAvatar = 'admin-building-card-avatar',
  AdminBuildingCardTitle = 'admin-building-card-title',
  AdminBuildingCardSubtitle = 'admin-building-card-subtitle',
  AdminBuildingCardCarousel = 'admin-building-card-carousel',
  AdminBuildingCardRooms = 'admin-building-card-rooms',
  AdminBuildingCardDate = 'admin-building-card-date',
  AdminBuildingActions = 'admin-building-actions',
}

export class AdminBuildingCardComponentPo<T> extends PageObject<T> {
  get adminBuildingCardAvatar(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingCardAutomation.AdminBuildingCardAvatar) ?? null;
  }

  get adminBuildingCardAvatarStyles(): Record<string, any> | null {
    return this.adminBuildingCardAvatar?.styles ?? null;
  }

  get adminBuildingCardAvatarHref(): string | null {
    return this.adminBuildingCardAvatar?.properties['href'] ?? null;
  }

  get adminBuildingCardTitleText(): string | null {
    return this.text(AdminBuildingCardAutomation.AdminBuildingCardTitle);
  }

  get adminBuildingCardSubtitleText(): string | null {
    return this.text(AdminBuildingCardAutomation.AdminBuildingCardSubtitle);
  }

  get adminBuildingCardCarousel(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingCardAutomation.AdminBuildingCardCarousel) ?? null;
  }

  get adminBuildingCardCarouselImages(): string | null {
    return this.adminBuildingCardCarousel?.attributes['ng-reflect-images'] ?? null;
  }

  get adminBuildingCardRoomsText(): string | null {
    return this.text(AdminBuildingCardAutomation.AdminBuildingCardRooms) ?? null;
  }

  get adminBuildingCardDateText(): string | null {
    return this.text(AdminBuildingCardAutomation.AdminBuildingCardDate) ?? null;
  }

  get adminBuildingActions(): DebugElement | null {
    return this.getByAutomationId(AdminBuildingCardAutomation.AdminBuildingActions) ?? null;
  }
}
