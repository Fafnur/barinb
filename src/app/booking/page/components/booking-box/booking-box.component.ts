import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingVariant } from '@app/booking/common';
import { BookingService } from '@app/booking/service';
import { NavigationPath } from '@app/core/navigation/common';
import { NavigationService } from '@app/core/navigation/service';

@Component({
  selector: 'app-booking-box',
  templateUrl: './booking-box.component.html',
  styleUrls: ['./booking-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingBoxComponent implements OnInit {
  bookingVariant$!: Observable<BookingVariant>;

  constructor(private readonly bookingService: BookingService, private readonly navigationService: NavigationService) {}

  ngOnInit(): void {
    this.bookingVariant$ = this.bookingService.bookingVariant$;
  }

  onClick(bookingVariant: BookingVariant): void {
    if (bookingVariant.firstRoom?.id) {
      void this.navigationService.navigateByUrl(NavigationPath.RoomPage, { id: bookingVariant.firstRoom?.id });
    }
  }
}
