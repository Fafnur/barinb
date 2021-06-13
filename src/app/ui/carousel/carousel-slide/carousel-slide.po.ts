import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './carousel-slide.component.spec';

enum CarouselSlideAutomation {
  CarouselSlide = 'carousel-slide',
  CarouselSlideImage = 'carousel-slide-image',
}

export class CarouselSlideComponentPo extends PageObject<WrapperComponent> {
  get carouselSlide(): DebugElement | null {
    return this.getByAutomationId(CarouselSlideAutomation.CarouselSlide);
  }

  get carouselSlideImage(): DebugElement | null {
    return this.getByAutomationId(CarouselSlideAutomation.CarouselSlideImage);
  }

  get carouselSlideImageStyles(): Record<string, any> | null {
    return this.carouselSlideImage?.styles ?? null;
  }
}
