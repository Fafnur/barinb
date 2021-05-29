import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BuildingExtended } from '@app/buildings/manager';

@Component({
  selector: 'app-admin-building-view-dialog',
  templateUrl: './admin-building-view-dialog.component.html',
  styleUrls: ['./admin-building-view-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingViewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly building: BuildingExtended) {}
}
