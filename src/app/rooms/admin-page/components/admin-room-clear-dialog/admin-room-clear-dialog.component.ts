import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-room-clear-dialog',
  templateUrl: './admin-room-clear-dialog.component.html',
  styleUrls: ['./admin-room-clear-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomClearDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<AdminRoomClearDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSuccess(): void {
    this.dialogRef.close(true);
  }
}
