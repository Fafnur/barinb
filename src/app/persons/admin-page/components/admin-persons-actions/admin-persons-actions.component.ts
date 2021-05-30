import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { PersonManager } from '@app/persons/manager';

import { AdminPersonClearDialogComponent } from '../admin-person-clear-dialog/admin-person-clear-dialog.component';
import { AdminPersonCreateDialogComponent } from '../admin-person-create-dialog/admin-person-create-dialog.component';

@Component({
  selector: 'app-admin-persons-actions',
  templateUrl: './admin-persons-actions.component.html',
  styleUrls: ['./admin-persons-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonsActionsComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly matDialog: MatDialog, private readonly personManager: PersonManager) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAdd(): void {
    this.matDialog.open(AdminPersonCreateDialogComponent);
  }

  onClear(): void {
    const dialogRef = this.matDialog.open(AdminPersonClearDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(
        tap((result) => {
          if (result) {
            this.personManager.clear();
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
