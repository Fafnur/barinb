import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { BuildingManager } from '@app/buildings/manager';

import { AdminBuildingClearDialogComponent } from '../admin-building-clear-dialog/admin-building-clear-dialog.component';
import { AdminBuildingCreateDialogComponent } from '../admin-building-create-dialog/admin-building-create-dialog.component';

@Component({
  selector: 'app-admin-buildings-actions',
  templateUrl: './admin-buildings-actions.component.html',
  styleUrls: ['./admin-buildings-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingsActionsComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly matDialog: MatDialog, private readonly buildingManager: BuildingManager) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAdd(): void {
    this.matDialog.open(AdminBuildingCreateDialogComponent);
  }

  onClear(): void {
    this.matDialog
      .open(AdminBuildingClearDialogComponent)
      .afterClosed()
      .pipe(
        tap((result) => {
          if (result) {
            this.buildingManager.clear();
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
