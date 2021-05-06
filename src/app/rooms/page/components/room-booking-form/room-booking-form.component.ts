import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';

import { BookingField } from '@app/booking/common';
import { BookingService } from '@app/booking/service';
import { RoomExtended } from '@app/rooms/manager';

import { getRoomBookingForm } from './room-booking.form';

@Component({
  selector: 'app-room-booking-form',
  templateUrl: './room-booking-form.component.html',
  styleUrls: ['./room-booking-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingFormComponent implements OnInit, OnDestroy {
  @Input() room!: RoomExtended;

  form!: FormGroup;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  BookingField = BookingField;

  showError = false;

  private readonly destroy$ = new Subject<void>();
  private edited = false;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.form = getRoomBookingForm();

    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        tap(() => {
          this.edited = true;
          this.showError = false;
          this.bookingService.setBookingDetails(this.form.value);
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.bookingService.bookingDetails$
      .pipe(
        tap((bookingDetails) => {
          if (!this.edited) {
            const details = { ...bookingDetails };

            if (bookingDetails[BookingField.Guests] > this.room.guests) {
              details[BookingField.Guests] = this.room.guests;
            }
            this.form.patchValue(details, { emitEvent: false });
            this.changeDetectorRef.markForCheck();
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBooking(): void {
    if (this.form.valid) {
    } else {
      this.showError = true;
    }
    this.changeDetectorRef.markForCheck();
  }
}
