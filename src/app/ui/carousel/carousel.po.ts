import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { CarouselComponent } from './carousel.component';
import { WrapperComponent } from './carousel.component.spec';

enum CarouselAutomation {
  Carousel = 'carousel',
  CarouselSlide = 'carousel-slide',
  CarouselDots = 'carousel-dots',
  CarouselNavs = 'carousel-navs',
}

export class CarouselComponentPo extends PageObject<WrapperComponent> {
  get carousel(): DebugElement | null {
    return this.getByAutomationId(CarouselAutomation.Carousel);
  }

  get carouselComponent(): CarouselComponent | null {
    return this.carousel?.componentInstance;
  }

  get carouselSlides(): DebugElement[] {
    return this.getAllByAutomationId(CarouselAutomation.CarouselSlide);
  }

  get carouselDots(): DebugElement | null {
    return this.getByAutomationId(CarouselAutomation.CarouselDots);
  }

  get carouselNavs(): DebugElement | null {
    return this.getByAutomationId(CarouselAutomation.CarouselNavs);
  }

  get carouselActiveSlideIndex(): number | null {
    return this.carouselComponent?.active ?? null;
  }

  triggerCarouselSlideFirstClick(): void {
    this.triggerEventHandler(this.carouselSlides[0], 'click');
  }

  triggerCarouselDotsClick(eventObj: number): void {
    this.triggerEventHandler(this.carouselDots, 'selected', eventObj);
  }

  triggerCarouselNavsNextClick(): void {
    this.triggerEventHandler(this.carouselNavs, 'next');
  }

  triggerCarouselNavsPrevClick(): void {
    this.triggerEventHandler(this.carouselNavs, 'prev');
  }
}
