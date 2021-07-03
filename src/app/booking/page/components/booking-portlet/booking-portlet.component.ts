import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  constructor(private readonly navigationService: NavigationService) {}

  onSelected(): void {
    if (this.bookingVariant?.firstRoom?.id) {
      void this.navigationService.navigateByUrl(NavigationPath.RoomPage, { id: this.bookingVariant.firstRoom?.id });
    }
  }
}
