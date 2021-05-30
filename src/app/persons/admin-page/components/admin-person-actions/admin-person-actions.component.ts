import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { PersonExtended, PersonManager } from '@app/persons/manager';

import { AdminPersonEditDialogComponent } from '../admin-person-edit-dialog/admin-person-edit-dialog.component';
import { AdminPersonRemoveDialogComponent } from '../admin-person-remove-dialog/admin-person-remove-dialog.component';
import { AdminPersonViewDialogComponent } from '../admin-person-view-dialog/admin-person-view-dialog.component';

@Component({
  selector: 'app-admin-person-actions',
  templateUrl: './admin-person-actions.component.html',
  styleUrls: ['./admin-person-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonActionsComponent implements OnDestroy {
  @Input() person!: PersonExtended;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly matDialog: MatDialog, private readonly personManager: PersonManager) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onView(): void {
    this.matDialog.open(AdminPersonViewDialogComponent, { data: this.person, width: '100%' });
  }

  onEdit(): void {
    this.matDialog.open(AdminPersonEditDialogComponent, { data: this.person });
  }

  onRemove(): void {
    const dialogRef = this.matDialog.open(AdminPersonRemoveDialogComponent, { data: this.person });
    dialogRef
      .afterClosed()
      .pipe(
        tap((result) => {
          if (result) {
            this.personManager.removePerson(this.person);
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
