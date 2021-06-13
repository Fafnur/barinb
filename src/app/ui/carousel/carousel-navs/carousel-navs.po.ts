import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './carousel-navs.component.spec';

enum CarouselNavsAutomation {
  CarouselNavs = 'carousel-navs',
  CarouselNavsNext = 'carousel-navs-next',
  CarouselNavsPrev = 'carousel-navs-prev',
}

export class CarouselNavsComponentPo extends PageObject<WrapperComponent> {
  get carouselNavs(): DebugElement | null {
    return this.getByAutomationId(CarouselNavsAutomation.CarouselNavs);
  }

  get carouselNavsPrev(): DebugElement | null {
    return this.getByAutomationId(CarouselNavsAutomation.CarouselNavsPrev);
  }

  get carouselNavsPrevText(): string | null {
    return this.text(CarouselNavsAutomation.CarouselNavsPrev);
  }

  get carouselNavsNext(): DebugElement | null {
    return this.getByAutomationId(CarouselNavsAutomation.CarouselNavsNext);
  }

  get carouselNavsNextText(): string | null {
    return this.text(CarouselNavsAutomation.CarouselNavsNext);
  }

  triggerCarouselNavsPrevClick(): void {
    this.triggerEventHandler(this.carouselNavsPrev, 'click');
  }

  triggerCarouselNavsNextClick(): void {
    this.triggerEventHandler(this.carouselNavsNext, 'click');
  }
}
