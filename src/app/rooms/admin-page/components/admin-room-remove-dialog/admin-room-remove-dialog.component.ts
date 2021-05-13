import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-admin-room-edit-dialog',
  templateUrl: './admin-room-remove-dialog.component.html',
  styleUrls: ['./admin-room-remove-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomRemoveDialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<AdminRoomRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly room: RoomExtended
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSuccess(): void {
    this.dialogRef.close(true);
  }
}
