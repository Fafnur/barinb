import { TestBed, waitForAsync } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { BookingDetails, BookingVariant } from '@app/booking/common';
import { BOOKING_DETAILS_STUB, BOOKING_VARIANT_STUB, BookingFacade } from '@app/booking/state';
import { Building } from '@app/buildings/common';
import { BuildingFacade, BUILDINGS_STUB } from '@app/buildings/state';
import { providerOf } from '@app/core/testing';
import { Room } from '@app/rooms/common';
import { RoomFacade, ROOMS_STUB } from '@app/rooms/state';

import { BookingService, castMapMarkerConfigs } from './booking.service';

describe('BookingService', () => {
  let service: BookingService;
  let roomFacadeMock: RoomFacade;
  let rooms$: ReplaySubject<Room[]>;
  let buildingFacadeMock: BuildingFacade;
  let buildings$: ReplaySubject<Building[]>;
  let bookingFacadeMock: BookingFacade;
  let bookingVariant$: ReplaySubject<BookingVariant>;
  let bookingDetails$: ReplaySubject<BookingDetails>;

  beforeEach(() => {
    roomFacadeMock = mock(RoomFacade);
    rooms$ = new ReplaySubject<Room[]>(1);
    buildingFacadeMock = mock(BuildingFacade);
    buildings$ = new ReplaySubject<Building[]>(1);
    bookingFacadeMock = mock(BookingFacade);
    bookingVariant$ = new ReplaySubject<BookingVariant>(1);
    bookingDetails$ = new ReplaySubject<BookingDetails>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          BookingService,
          providerOf(RoomFacade, roomFacadeMock),
          providerOf(BuildingFacade, buildingFacadeMock),
          providerOf(BookingFacade, bookingFacadeMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(roomFacadeMock.rooms$).thenReturn(rooms$);
    when(buildingFacadeMock.buildings$).thenReturn(buildings$);
    when(bookingFacadeMock.bookingVariant$).thenReturn(bookingVariant$);
    when(bookingFacadeMock.bookingDetails$).thenReturn(bookingDetails$);
    // after init all props, get service
    service = TestBed.inject(BookingService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set bookingVariant', () => {
    bookingVariant$.next(BOOKING_VARIANT_STUB);

    const expected$ = hot('a', {
      a: BOOKING_VARIANT_STUB,
    });

    expect(service.bookingVariant$).toBeObservable(expected$);
  });

  it('should set bookingVariants', () => {
    rooms$.next(ROOMS_STUB);
    buildings$.next(BUILDINGS_STUB);

    const expected$ = hot('a', {
      a: [{ ...BUILDINGS_STUB[0], firstRoom: ROOMS_STUB[0] }],
    });

    expect(service.bookingVariants$).toBeObservable(expected$);
  });

  it('should set bookingDetails', () => {
    bookingDetails$.next(BOOKING_DETAILS_STUB);

    const expected$ = hot('a', {
      a: BOOKING_DETAILS_STUB,
    });

    expect(service.bookingDetails$).toBeObservable(expected$);
  });

  it('should set mapMarkers', () => {
    rooms$.next(ROOMS_STUB);
    buildings$.next(BUILDINGS_STUB);

    const expected$ = hot('a', {
      a: castMapMarkerConfigs([{ ...BUILDINGS_STUB[0], firstRoom: ROOMS_STUB[0] }]),
    });

    expect(service.mapMarkers$).toBeObservable(expected$);
  });

  it('should call bookingFacadeMock method setBookingVariant()', () => {
    service.setBookingVariant(BOOKING_VARIANT_STUB);

    verify(bookingFacadeMock.setBookingVariant(deepEqual(BOOKING_VARIANT_STUB))).once();
  });

  it('should call bookingFacadeMock method setBookingDetails()', () => {
    service.setBookingDetails(BOOKING_DETAILS_STUB);

    verify(bookingFacadeMock.setBookingDetails(deepEqual(BOOKING_DETAILS_STUB))).once();
  });

  it('should call bookingFacadeMock method clearBookingVariant()', () => {
    service.clearBookingVariant();

    verify(bookingFacadeMock.clearBookingVariant()).once();
  });

  it('should call bookingFacadeMock method clearBookingDetails()', () => {
    service.clearBookingDetails();

    verify(bookingFacadeMock.clearBookingDetails()).once();
  });
});
