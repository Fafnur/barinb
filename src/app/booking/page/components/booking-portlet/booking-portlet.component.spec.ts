import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { BookingSharedModule } from '@app/booking/shared';
import { BOOKING_VARIANT_STUB } from '@app/booking/state';
import { NavigationPath } from '@app/core/navigation/common';
import { NavigationService } from '@app/core/navigation/service';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { providerOf } from '@app/core/testing';
import { CarouselModule } from '@app/ui/carousel';
import { GridModule } from '@app/ui/grid';

import { BookingPortletComponent } from './booking-portlet.component';
import { BookingPortletComponentPo } from './booking-portlet.po';

@Component({
  template: `<app-booking-portlet automation-id="booking-portlet" [bookingVariant]="bookingVariant"></app-booking-portlet>`,
})
class WrapperComponent {
  bookingVariant = BOOKING_VARIANT_STUB;
}

describe('BookingPortletComponent', () => {
  let pageObject: BookingPortletComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatButtonModule,
          NavigationSharedModule,
          MockModule(BookingSharedModule),
          MockModule(GridModule),
          MockModule(CarouselModule),
        ],
        declarations: [BookingPortletComponent, WrapperComponent],
        providers: [providerOf(NavigationService, navigationServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new BookingPortletComponentPo(fixtureWrapper);
    when(navigationServiceMock.navigateByUrl(anything(), anything(), anything())).thenReturn();
    when(navigationServiceMock.getRoute(anything(), anything())).thenReturn(['rooms', BOOKING_VARIANT_STUB.firstRoom?.id ?? 1]);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set carousel', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.bookingPortletCarousel).toBeTruthy();
  });

  it('should set title', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.bookingPortletPriceTitle).toBe(BOOKING_VARIANT_STUB.name);
  });

  it('should set address', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.bookingPortletAddressText).toBe(`Адрес: ${BOOKING_VARIANT_STUB.address}`);
  });

  it('should set price', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.bookingPortletPriceText).toBe(`Цена за ночь: ${BOOKING_VARIANT_STUB.firstRoom?.price} ₽`);
  });

  it('should set action path', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.bookingPortletActionHref).toBe('/rooms/1');
  });

  it('should set call method navigate', () => {
    fixtureWrapper.detectChanges();

    pageObject.triggerBookingPortletCarouselSelected();
    fixtureWrapper.detectChanges();

    verify(navigationServiceMock.navigateByUrl(NavigationPath.RoomPage, deepEqual({ id: BOOKING_VARIANT_STUB.firstRoom?.id }))).once();
  });
});
