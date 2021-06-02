import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { BookingService, castMapMarkerConfigs } from '@app/booking/service';
import { BOOKING_VARIANT_STUB } from '@app/booking/state';
import { providerOf } from '@app/core/testing';
import { MapMarkerConfig } from '@app/maps/common';
import { GoogleMapsSharedModule } from '@app/maps/shared';

import { BookingMapComponent } from './booking-map.component';
import { BookingMapComponentPo } from './booking-map.po';

describe('BookingMapComponent', () => {
  let pageObject: BookingMapComponentPo;
  let fixture: ComponentFixture<BookingMapComponent>;
  let bookingServiceMock: BookingService;
  let mapMarkers$: ReplaySubject<MapMarkerConfig[]>;
  const mapMarkers: MapMarkerConfig[] = castMapMarkerConfigs([BOOKING_VARIANT_STUB]);

  beforeEach(() => {
    bookingServiceMock = mock(BookingService);
    mapMarkers$ = new ReplaySubject<MapMarkerConfig[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MockModule(GoogleMapsSharedModule)],
        declarations: [BookingMapComponent],
        providers: [providerOf(BookingService, bookingServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMapComponent);
    pageObject = new BookingMapComponentPo(fixture);
    when(bookingServiceMock.mapMarkers$).thenReturn(mapMarkers$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set google map markers', () => {
    fixture.detectChanges();

    mapMarkers$.next(mapMarkers);
    fixture.detectChanges();

    expect(pageObject.bookingMapGoogle).toBeTruthy();
  });

  it('should call method setBookingVariant()', () => {
    fixture.detectChanges();

    mapMarkers$.next(mapMarkers);
    fixture.detectChanges();
    pageObject.triggerBookingMapGoogleClicked(mapMarkers[0]);
    fixture.detectChanges();

    verify(bookingServiceMock.setBookingVariant(deepEqual(mapMarkers[0].data))).once();
  });

  it('should call method clearBookingVariant()', () => {
    fixture.detectChanges();

    mapMarkers$.next(mapMarkers);
    fixture.detectChanges();
    pageObject.triggerBookingMapGoogleInfoWindowClosed();
    fixture.detectChanges();

    verify(bookingServiceMock.clearBookingVariant()).once();
  });
});
