import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-building-clear-dialog',
  templateUrl: './admin-building-clear-dialog.component.html',
  styleUrls: ['./admin-building-clear-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingClearDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<AdminBuildingClearDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSuccess(): void {
    this.dialogRef.close(true);
  }
}
