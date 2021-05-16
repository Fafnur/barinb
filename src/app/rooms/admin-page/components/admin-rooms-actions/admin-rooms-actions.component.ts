import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { RoomManager } from '@app/rooms/manager';

import { AdminRoomClearDialogComponent } from '../admin-room-clear-dialog/admin-room-clear-dialog.component';
import { AdminRoomCreateDialogComponent } from '../admin-room-create-dialog/admin-room-create-dialog.component';

@Component({
  selector: 'app-admin-rooms-actions',
  templateUrl: './admin-rooms-actions.component.html',
  styleUrls: ['./admin-rooms-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomsActionsComponent implements OnDestroy {
  @Output() clear = new EventEmitter<void>();

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly matDialog: MatDialog, private readonly roomManager: RoomManager) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddRoom(): void {
    this.matDialog.open(AdminRoomCreateDialogComponent);
  }

  onClearRooms(): void {
    const dialogRef = this.matDialog.open(AdminRoomClearDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(
        tap((result) => {
          if (result) {
            this.roomManager.clear();
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
