import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { CarouselComponent } from './carousel.component';
import { CarouselComponentPo } from './carousel.po';
import { CarouselDotsModule } from './carousel-dots/carousel-dots.module';
import { CarouselNavsModule } from './carousel-navs/carousel-navs.module';
import { CarouselSlideModule } from './carousel-slide/carousel-slide.module';

@Component({
  template: `<app-carousel automation-id="carousel" [images]="images"></app-carousel>`,
})
export class WrapperComponent {
  images = ['/1.jpg', '/2.jpg', '/3.jpg'];
}

describe('CarouselComponent', () => {
  let pageObject: CarouselComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MockModule(CarouselDotsModule), MockModule(CarouselNavsModule), MockModule(CarouselSlideModule)],
        declarations: [CarouselComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show slides, dots and navs', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.carouselDots).toBeTruthy();
    expect(pageObject.carouselNavs).toBeTruthy();
    expect(pageObject.carouselSlides.length).toBe(3);
  });

  it('should call selected after click on first slide', () => {
    const selected = spyOn(pageObject.carousel?.componentInstance.selected, 'emit');

    fixtureWrapper.detectChanges();
    pageObject.triggerCarouselSlideFirstClick();
    fixtureWrapper.detectChanges();

    expect(selected).toBeCalledWith(0);
  });

  it('should change active slide after click next', () => {
    fixtureWrapper.detectChanges();

    pageObject.triggerCarouselNavsNextClick();
    fixtureWrapper.detectChanges();

    expect(pageObject.carouselActiveSlideIndex).toBe(1);
  });

  it('should change active slide after click prev', () => {
    fixtureWrapper.detectChanges();

    pageObject.triggerCarouselNavsPrevClick();
    fixtureWrapper.detectChanges();

    expect(pageObject.carouselActiveSlideIndex).toBe(2);
  });

  it('should select slide after click on dot', () => {
    const selected = spyOn(pageObject.carousel?.componentInstance, 'onSelected');

    fixtureWrapper.detectChanges();

    pageObject.triggerCarouselDotsClick(2);
    fixtureWrapper.detectChanges();

    expect(selected).toBeCalledWith(2);
  });
});
