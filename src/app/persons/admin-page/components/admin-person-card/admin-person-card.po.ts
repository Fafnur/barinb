import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum AdminPersonCardAutomation {
  AdminPersonCardAvatar = 'admin-person-card-avatar',
  AdminPersonCardTitle = 'admin-person-card-title',
  AdminPersonCardSubtitle = 'admin-person-card-subtitle',
  AdminPersonCardCarousel = 'admin-person-card-carousel',
  AdminPersonCardRooms = 'admin-person-card-rooms',
  AdminPersonCardBuildings = 'admin-person-card-buildings',
  AdminPersonActions = 'admin-person-actions',
}

export class AdminPersonCardComponentPo<T> extends PageObject<T> {
  get adminPersonCardAvatar(): DebugElement | null {
    return this.getByAutomationId(AdminPersonCardAutomation.AdminPersonCardAvatar) ?? null;
  }

  get adminPersonCardAvatarStyles(): Record<string, any> | null {
    return this.adminPersonCardAvatar?.styles ?? null;
  }

  get adminPersonCardAvatarHref(): string | null {
    return this.adminPersonCardAvatar?.properties['href'] ?? null;
  }

  get adminPersonCardTitleText(): string | null {
    return this.text(AdminPersonCardAutomation.AdminPersonCardTitle);
  }

  get adminPersonCardSubtitleText(): string | null {
    return this.text(AdminPersonCardAutomation.AdminPersonCardSubtitle);
  }

  get adminPersonCardCarousel(): DebugElement | null {
    return this.getByAutomationId(AdminPersonCardAutomation.AdminPersonCardCarousel) ?? null;
  }

  get adminPersonCardCarouselImages(): string | null {
    return this.adminPersonCardCarousel?.attributes['ng-reflect-images'] ?? null;
  }

  get adminPersonCardRoomsText(): string | null {
    return this.text(AdminPersonCardAutomation.AdminPersonCardRooms) ?? null;
  }

  get adminPersonCardBuildingsText(): string | null {
    return this.text(AdminPersonCardAutomation.AdminPersonCardBuildings) ?? null;
  }

  get adminPersonActions(): DebugElement | null {
    return this.getByAutomationId(AdminPersonCardAutomation.AdminPersonActions) ?? null;
  }
}
