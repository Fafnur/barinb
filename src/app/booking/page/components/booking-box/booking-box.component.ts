import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingVariant } from '@app/booking/common';
import { BookingService } from '@app/booking/service';

@Component({
  selector: 'app-booking-box',
  templateUrl: './booking-box.component.html',
  styleUrls: ['./booking-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingBoxComponent implements OnInit {
  bookingVariant$!: Observable<BookingVariant>;

  constructor(private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingVariant$ = this.bookingService.bookingVariant$;
  }
}
