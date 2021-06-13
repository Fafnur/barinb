import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselDotsComponent } from './carousel-dots.component';
import { CarouselComponentPo } from './carousel-dots.po';

@Component({
  template: `<app-carousel-dots automation-id="carousel-dots" [counts]="counts"></app-carousel-dots>`,
})
export class WrapperComponent {
  counts = 3;
}

describe('CarouselDotsComponent', () => {
  let pageObject: CarouselComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [CarouselDotsComponent, WrapperComponent],
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

  it('should set dots', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.carouselDotsItems.length).toBe(fixtureWrapper.componentInstance.counts);
  });

  it('should call selected', () => {
    const selected = spyOn(pageObject.carouselDots?.componentInstance.selected, 'emit');

    fixtureWrapper.detectChanges();

    pageObject.triggerCarouselDotsFirstClick();

    expect(selected).toBeCalledWith(0);
  });
});
