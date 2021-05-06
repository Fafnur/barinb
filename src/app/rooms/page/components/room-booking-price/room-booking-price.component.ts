import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { BookingDetails } from '@app/booking/common';
import { BookingService } from '@app/booking/service';
import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-booking-price',
  templateUrl: './room-booking-price.component.html',
  styleUrls: ['./room-booking-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingPriceComponent implements OnInit, OnDestroy {
  @Input() room!: RoomExtended;

  bookingDetails$!: Observable<BookingDetails>;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingDetails$ = this.bookingService.bookingDetails$;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
