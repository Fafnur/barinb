import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PersonExtended } from '@app/persons/manager';

@Component({
  selector: 'app-admin-person-edit-dialog',
  templateUrl: './admin-person-remove-dialog.component.html',
  styleUrls: ['./admin-person-remove-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonRemoveDialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<AdminPersonRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly person: PersonExtended
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSuccess(): void {
    this.dialogRef.close(true);
  }
}
