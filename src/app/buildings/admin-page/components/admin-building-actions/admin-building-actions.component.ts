import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { BuildingExtended, BuildingManager } from '@app/buildings/manager';

import { AdminBuildingEditDialogComponent } from '../admin-building-edit-dialog/admin-building-edit-dialog.component';
import { AdminBuildingRemoveDialogComponent } from '../admin-building-remove-dialog/admin-building-remove-dialog.component';
import { AdminBuildingViewDialogComponent } from '../admin-building-view-dialog/admin-building-view-dialog.component';

@Component({
  selector: 'app-admin-building-actions',
  templateUrl: './admin-building-actions.component.html',
  styleUrls: ['./admin-building-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingActionsComponent implements OnDestroy {
  @Input() building!: BuildingExtended;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly matDialog: MatDialog, private readonly buildingManager: BuildingManager) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onView(): void {
    this.matDialog.open(AdminBuildingViewDialogComponent, { data: this.building, width: '100%' });
  }

  onEdit(): void {
    this.matDialog.open(AdminBuildingEditDialogComponent, { data: this.building });
  }

  onRemove(): void {
    this.matDialog
      .open(AdminBuildingRemoveDialogComponent, { data: this.building })
      .afterClosed()
      .pipe(
        tap((result) => {
          if (result) {
            this.buildingManager.removeBuilding(this.building);
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
