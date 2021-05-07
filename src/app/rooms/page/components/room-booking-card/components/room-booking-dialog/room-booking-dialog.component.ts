import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-room-booking-dialog',
  templateUrl: './room-booking-dialog.component.html',
  styleUrls: ['./room-booking-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookingDialogComponent {}
