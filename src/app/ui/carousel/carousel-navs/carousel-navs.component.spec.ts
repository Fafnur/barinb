import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CarouselNavsComponent } from './carousel-navs.component';
import { CarouselNavsComponentPo } from './carousel-navs.po';

@Component({
  template: `<app-carousel-navs automation-id="carousel-navs"></app-carousel-navs>`,
})
export class WrapperComponent {}

describe('CarouselNavsComponent', () => {
  let pageObject: CarouselNavsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MatButtonModule, MatIconModule],
        declarations: [CarouselNavsComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CarouselNavsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show navs actions', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.carouselNavsPrevText).toBe('navigate_before');
    expect(pageObject.carouselNavsNextText).toBe('navigate_next');
  });

  it('should call next after click next', () => {
    const next = spyOn(pageObject.carouselNavs?.componentInstance.next, 'emit');

    fixtureWrapper.detectChanges();
    pageObject.triggerCarouselNavsNextClick();

    expect(next).toBeCalled();
  });

  it('should call prev after click prev', () => {
    const next = spyOn(pageObject.carouselNavs?.componentInstance.prev, 'emit');

    fixtureWrapper.detectChanges();
    pageObject.triggerCarouselNavsPrevClick();

    expect(next).toBeCalled();
  });
});
