import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingVariant } from '@app/booking/common';
import { BookingService } from '@app/booking/service';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingCardComponent implements OnInit {
  bookingVariant$!: Observable<BookingVariant>;

  constructor(private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingVariant$ = this.bookingService.bookingVariant$;
  }
}
