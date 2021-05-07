import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-booking-guest',
  templateUrl: './room-booking-guest.component.html',
  styleUrls: ['./room-booking-guest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingGuestComponent {
  @Input() control!: FormControl | null;
  @Input() room!: RoomExtended;

  get guests(): number[] {
    return Array.from({ length: this.room.guests ?? 1 }, (value, key) => key + 1);
  }
}
