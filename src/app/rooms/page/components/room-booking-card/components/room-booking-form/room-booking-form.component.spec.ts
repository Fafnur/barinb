import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { deepEqual, mock, verify, when } from 'ts-mockito';

import { BookingDetails, BookingField } from '@app/booking/common';
import { BookingService } from '@app/booking/service';
import { FormsSharedModule } from '@app/core/forms/shared';
import { providerOf } from '@app/core/testing';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomBookingDialogComponent } from '../room-booking-dialog/room-booking-dialog.component';
import { RoomBookingDialogModule } from '../room-booking-dialog/room-booking-dialog.module';
import { RoomBookingDateModule } from './components/room-booking-date/room-booking-date.module';
import { RoomBookingGuestModule } from './components/room-booking-guest/room-booking-guest.module';
import { RoomBookingFormComponent } from './room-booking-form.component';
import { RoomBookingFormComponentPo } from './room-booking-form.po';

@Component({
  template: `<app-room-booking-form [room]="room"></app-room-booking-form>`,
})
export class WrapperComponent {
  @ViewChild(RoomBookingFormComponent) roomBookingFormComponent!: RoomBookingFormComponent;
  room = ROOM_EXTENDED_STUB;
}

describe('RoomBookingFormComponent', () => {
  let pageObject: RoomBookingFormComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let bookingServiceMock: BookingService;
  let bookingDetails$: ReplaySubject<BookingDetails>;
  let matDialogMock: MatDialog;

  const FORM_STUB: BookingDetails = {
    [BookingField.Period]: {
      [BookingField.PeriodStart]: new Date().toISOString(),
      [BookingField.PeriodEnd]: new Date().toISOString(),
    },
    [BookingField.Guests]: 1,
  };

  beforeEach(() => {
    bookingServiceMock = mock(BookingService);
    bookingDetails$ = new ReplaySubject<BookingDetails>(1);
    matDialogMock = mock(MatDialog);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatButtonModule,
          MatInputModule,
          MatDialogModule,
          FormsSharedModule,
          ReactiveFormsModule,
          MockModule(RoomBookingDialogModule),
          MockModule(RoomBookingDateModule),
          MockModule(RoomBookingGuestModule),
        ],
        declarations: [RoomBookingFormComponent, WrapperComponent],
        providers: [providerOf(BookingService, bookingServiceMock), providerOf(MatDialog, matDialogMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomBookingFormComponentPo(fixtureWrapper);
    when(bookingServiceMock.bookingDetails$).thenReturn(bookingDetails$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show form', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomBookingGuest).toBeTruthy();
    expect(pageObject.roomBookingDate).toBeTruthy();
    expect(pageObject.roomBookingErrorText).toBeNull();
    expect(pageObject.roomBookingSubmitText).toBe('Забронировать');
  });

  it('should set form', () => {
    fixtureWrapper.detectChanges();

    pageObject.setForm(FORM_STUB);
    fixtureWrapper.detectChanges();

    verify(bookingServiceMock.setBookingDetails(deepEqual(FORM_STUB))).once();
  });

  it('should open dialog', () => {
    fixtureWrapper.detectChanges();

    pageObject.setForm(FORM_STUB);
    fixtureWrapper.detectChanges();
    pageObject.triggerRoomBookingSubmitClick();

    verify(matDialogMock.open(RoomBookingDialogComponent)).once();
  });
});
