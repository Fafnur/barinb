import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-person-clear-dialog',
  templateUrl: './admin-person-clear-dialog.component.html',
  styleUrls: ['./admin-person-clear-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonClearDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<AdminPersonClearDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSuccess(): void {
    this.dialogRef.close(true);
  }
}
