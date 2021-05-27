import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-admin-room-view-dialog',
  templateUrl: './admin-room-view-dialog.component.html',
  styleUrls: ['./admin-room-view-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomViewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly room: RoomExtended) {}
}
