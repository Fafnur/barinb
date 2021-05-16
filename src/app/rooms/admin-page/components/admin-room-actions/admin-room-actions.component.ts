import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { RoomExtended, RoomManager } from '@app/rooms/manager';

import { AdminRoomEditDialogComponent } from '../admin-room-edit-dialog';
import { AdminRoomRemoveDialogComponent } from '../admin-room-remove-dialog';
import { AdminRoomViewDialogComponent } from '../admin-room-view-dialog';

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

  onViewRoom(): void {
    this.matDialog.open(AdminRoomViewDialogComponent, { data: this.room });
  }

  onEditRoom(): void {
    this.matDialog.open(AdminRoomEditDialogComponent, { data: this.room });
  }

  onRemoveRoom(): void {
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
