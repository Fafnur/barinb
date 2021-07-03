import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { BookingVariant } from '@app/booking/common';
import { BookingService } from '@app/booking/service';
import { BookingSharedModule } from '@app/booking/shared';
import { BOOKING_VARIANT_STUB } from '@app/booking/state';
import { NavigationPath } from '@app/core/navigation/common';
import { NavigationService } from '@app/core/navigation/service';
import { providerOf } from '@app/core/testing';
import { CarouselModule } from '@app/ui/carousel';

import { BookingCardComponent } from './booking-card.component';
import { BookingCardComponentPo } from './booking-card.po';

describe('BookingCardComponent', () => {
  let pageObject: BookingCardComponentPo;
  let fixture: ComponentFixture<BookingCardComponent>;
  let bookingServiceMock: BookingService;
  let navigationServiceMock: NavigationService;
  let bookingVariant$: ReplaySubject<BookingVariant>;

  beforeEach(() => {
    bookingServiceMock = mock(BookingService);
    navigationServiceMock = mock(NavigationService);
    bookingVariant$ = new ReplaySubject<BookingVariant>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [BookingSharedModule, MockModule(CarouselModule)],
        declarations: [BookingCardComponent],
        providers: [providerOf(BookingService, bookingServiceMock), providerOf(NavigationService, navigationServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCardComponent);
    pageObject = new BookingCardComponentPo(fixture);
    when(bookingServiceMock.bookingVariant$).thenReturn(bookingVariant$);
    when(navigationServiceMock.navigateByUrl(anything(), anything(), anything())).thenReturn();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set description for component', () => {
    fixture.detectChanges();

    expect(pageObject.bookingCardDescription).toBeNull();

    bookingVariant$.next(BOOKING_VARIANT_STUB);
    fixture.detectChanges();

    expect(pageObject.bookingCardDescription).toBe(BOOKING_VARIANT_STUB.address);
  });

  it('should set call method navigate', () => {
    fixture.detectChanges();

    bookingVariant$.next(BOOKING_VARIANT_STUB);
    fixture.detectChanges();
    pageObject.triggerBookingVariantSelected(BOOKING_VARIANT_STUB);
    fixture.detectChanges();

    verify(navigationServiceMock.navigateByUrl(NavigationPath.RoomPage, deepEqual({ id: BOOKING_VARIANT_STUB.firstRoom?.id }))).once();
  });
});
