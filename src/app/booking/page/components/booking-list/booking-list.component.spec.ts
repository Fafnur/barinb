import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { BookingVariant } from '@app/booking/common';
import { BookingService } from '@app/booking/service';
import { BOOKING_VARIANT_STUB } from '@app/booking/state';
import { providerOf } from '@app/core/testing';

import { BookingPortletModule } from '../booking-portlet/booking-portlet.module';
import { BookingListComponent } from './booking-list.component';
import { BookingListComponentPo } from './booking-list.po';

describe('BookingListComponent', () => {
  let pageObject: BookingListComponentPo;
  let fixture: ComponentFixture<BookingListComponent>;
  let bookingServiceMock: BookingService;
  let bookingVariants$: ReplaySubject<BookingVariant[]>;

  beforeEach(() => {
    bookingServiceMock = mock(BookingService);
    bookingVariants$ = new ReplaySubject<BookingVariant[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MockModule(BookingPortletModule)],
        declarations: [BookingListComponent],
        providers: [providerOf(BookingService, bookingServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListComponent);
    pageObject = new BookingListComponentPo(fixture);
    when(bookingServiceMock.bookingVariants$).thenReturn(bookingVariants$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set portlets', () => {
    fixture.detectChanges();

    expect(pageObject.bookingListPortlets.length).toBe(0);

    bookingVariants$.next([BOOKING_VARIANT_STUB]);
    fixture.detectChanges();

    expect(pageObject.bookingListPortlets?.length).toBe(1);
  });

  it('should set portlets', () => {
    fixture.detectChanges();

    bookingVariants$.next([]);
    fixture.detectChanges();

    expect(pageObject.bookingListEmptyText).toBe('Нет доступных отелей и апартаментов.');
  });
});
