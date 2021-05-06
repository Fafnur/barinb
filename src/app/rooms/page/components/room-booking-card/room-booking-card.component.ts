import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NumeralType } from '@app/numerals/common';
import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-booking-card',
  templateUrl: './room-booking-card.component.html',
  styleUrls: ['./room-booking-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingCardComponent {
  @Input() room!: RoomExtended;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  NumeralType = NumeralType;
}
