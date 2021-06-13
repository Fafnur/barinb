import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { RoomExtended, RoomManager } from '@app/rooms/manager';

import { AdminRoomEditDialogComponent } from '../admin-room-edit-dialog/admin-room-edit-dialog.component';
import { AdminRoomRemoveDialogComponent } from '../admin-room-remove-dialog/admin-room-remove-dialog.component';
import { AdminRoomViewDialogComponent } from '../admin-room-view-dialog/admin-room-view-dialog.component';

@Component({
  selector: 'app-admin-room-actions',
  templateUrl: './admin-room-actions.component.html',
  styleUrls: ['./admin-room-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomActionsComponent implements OnDestroy {
  @Input() room!: RoomExtended;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly matDialog: MatDialog, private readonly roomManager: RoomManager) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onView(): void {
    this.matDialog.open(AdminRoomViewDialogComponent, { data: this.room, width: '100%' });
  }

  onEdit(): void {
    this.matDialog.open(AdminRoomEditDialogComponent, { data: this.room });
  }

  onRemove(): void {
    const dialogRef = this.matDialog.open(AdminRoomRemoveDialogComponent, { data: this.room });
    dialogRef
      .afterClosed()
      .pipe(
        tap((result) => {
          if (result) {
            this.roomManager.removeRoom(this.room);
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
