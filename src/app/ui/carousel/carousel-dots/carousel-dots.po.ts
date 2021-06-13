import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './carousel-dots.component.spec';

enum CarouselDotsAutomation {
  CarouselDots = 'carousel-dots',
  CarouselDotsItem = 'carousel-dots-item',
}

export class CarouselComponentPo extends PageObject<WrapperComponent> {
  get carouselDots(): DebugElement | null {
    return this.getByAutomationId(CarouselDotsAutomation.CarouselDots);
  }

  get carouselDotsItems(): DebugElement[] {
    return this.getAllByAutomationId(CarouselDotsAutomation.CarouselDotsItem);
  }

  triggerCarouselDotsFirstClick(): void {
    this.triggerEventHandler(this.carouselDotsItems[0], 'click');
  }
}
