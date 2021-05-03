import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingVariant } from '@app/booking/common';
import { BookingService } from '@app/booking/service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingListComponent implements OnInit {
  bookingVariants$!: Observable<BookingVariant[]>;

  constructor(private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingVariants$ = this.bookingService.bookingVariants$;
  }
}
