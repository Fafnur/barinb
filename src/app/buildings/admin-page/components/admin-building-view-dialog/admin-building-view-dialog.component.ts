import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BuildingExtended } from '@app/buildings/manager';
import { NavigationPath } from '@app/core/navigation/common';

@Component({
  selector: 'app-admin-building-view-dialog',
  templateUrl: './admin-building-view-dialog.component.html',
  styleUrls: ['./admin-building-view-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingViewDialogComponent {
  roomPath = NavigationPath.AdminRoomsPage;

  constructor(@Inject(MAT_DIALOG_DATA) public readonly building: BuildingExtended) {}
}
