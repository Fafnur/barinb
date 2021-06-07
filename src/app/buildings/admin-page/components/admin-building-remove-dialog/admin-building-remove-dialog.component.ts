import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BuildingExtended } from '@app/buildings/manager';

@Component({
  selector: 'app-admin-building-edit-dialog',
  templateUrl: './admin-building-remove-dialog.component.html',
  styleUrls: ['./admin-building-remove-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingRemoveDialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<AdminBuildingRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly building: BuildingExtended
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onRemove(): void {
    this.dialogRef.close(true);
  }
}
