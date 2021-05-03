import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BookingVariant } from '@app/booking/common';
import { NavigationPath } from '@app/core/navigation/common';
import { NavigationService } from '@app/core/navigation/service';

@Component({
  selector: 'app-booking-portlet',
  templateUrl: './booking-portlet.component.html',
  styleUrls: ['./booking-portlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPortletComponent {
  @Input() bookingVariant!: BookingVariant;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;

  constructor(private readonly router: Router, private readonly navigationService: NavigationService) {}

  onSelected(): void {
    if (this.bookingVariant.firstRoom?.id) {
      this.router.navigate(this.navigationService.getRoute(NavigationPath.RoomPage, { id: this.bookingVariant.firstRoom?.id }));
    }
  }
}
