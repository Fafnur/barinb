import { DecimalPipe, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { Component, LOCALE_ID, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { BookingDetails, BookingPrice } from '@app/booking/common';
import { BookingService } from '@app/booking/service';
import { BOOKING_DETAILS_STUB } from '@app/booking/state';
import { NumeralSharedModule } from '@app/core/numerals/shared';
import { providerOf } from '@app/core/testing';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomBookingFormComponent } from '../room-booking-form/room-booking-form.component';
import { RoomBookingPriceComponent } from './room-booking-price.component';
import { RoomBookingPriceComponentPo } from './room-booking-price.po';
import { RoomBookingPriceService } from './room-booking-price.service';

registerLocaleData(localeRu);

@Component({
  template: `<app-room-booking-price [room]="room"></app-room-booking-price>`,
})
export class WrapperComponent {
  @ViewChild(RoomBookingFormComponent) roomBookingFormComponent!: RoomBookingFormComponent;
  room = ROOM_EXTENDED_STUB;
}

describe('RoomBookingPriceComponent', () => {
  let pageObject: RoomBookingPriceComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let bookingServiceMock: BookingService;
  let bookingDetails$: ReplaySubject<BookingDetails>;
  let decimalPipe: DecimalPipe;

  const BOOKING_PRICE_STUB: BookingPrice = {
    cleaning: 25,
    days: 1,
    fee: 375,
    rent: 2500,
    total: 2900,
  };

  beforeEach(() => {
    bookingServiceMock = mock(BookingService);
    bookingDetails$ = new ReplaySubject<BookingDetails>(1);
    decimalPipe = new DecimalPipe('ru-RU');
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MatButtonModule, NumeralSharedModule],
        declarations: [RoomBookingPriceComponent, WrapperComponent],
        providers: [
          providerOf(BookingService, bookingServiceMock),
          RoomBookingPriceService,
          {
            provide: LOCALE_ID,
            useValue: 'ru-RU',
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomBookingPriceComponentPo(fixtureWrapper);
    when(bookingServiceMock.bookingDetails$).thenReturn(bookingDetails$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show details', () => {
    fixtureWrapper.detectChanges();

    bookingDetails$.next(BOOKING_DETAILS_STUB);
    fixtureWrapper.detectChanges();

    expect(pageObject.roomBookingPriceLabelText).toBe(`${decimalPipe.transform(BOOKING_PRICE_STUB.rent)} ₽ x 1 ночь`);
    expect(pageObject.roomBookingPriceValueText).toBe(`${decimalPipe.transform(BOOKING_PRICE_STUB.rent)} ₽`);

    expect(pageObject.roomBookingCleaningLabelText).toBe('Плата за уборку');
    expect(pageObject.roomBookingCleaningValueText).toBe(`${decimalPipe.transform(BOOKING_PRICE_STUB.cleaning)} ₽`);

    expect(pageObject.roomBookingFeeLabelText).toBe('Сбор за услуги Barinb');
    expect(pageObject.roomBookingFeeValueText).toBe(`${decimalPipe.transform(BOOKING_PRICE_STUB.fee)} ₽`);

    expect(pageObject.roomBookingTotalLabelText).toBe('Итого');
    expect(pageObject.roomBookingTotalValueText).toBe(`${decimalPipe.transform(BOOKING_PRICE_STUB.total)} ₽`);
  });
});
