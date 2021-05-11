import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

import { NavigationPath } from '@app/core/navigation/common';
import { Room, RoomField } from '@app/rooms/common';
import { RoomExtended, RoomManager } from '@app/rooms/manager';

import { AdminRoomClearDialogComponent } from './components/admin-room-clear-dialog/admin-room-clear-dialog.component';
import { AdminRoomViewDialogComponent } from './components/admin-room-view-dialog';

@Component({
  selector: 'app-room-admin-page',
  templateUrl: './room-admin-page.component.html',
  styleUrls: ['./room-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomAdminPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  RoomField = RoomField;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;

  rooms!: RoomExtended[];
  dataSource!: MatTableDataSource<Room>;
  displayedColumns: string[] = [
    RoomField.ID,

    RoomField.Photos,
    // RoomField.Description,
    RoomField.Price,
    RoomField.Created,
    RoomField.Updated,
    RoomField.Building,
    RoomField.Person,

    'view',
  ];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly matDialog: MatDialog,
    private readonly roomManager: RoomManager
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Room>();
    this.roomManager.roomsExtended$
      .pipe(
        tap((rooms) => {
          this.rooms = rooms;
          this.dataSource.data = this.rooms;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.changeDetectorRef.detectChanges();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onViewRoom(room: RoomExtended): void {
    this.matDialog.open(AdminRoomViewDialogComponent, { data: room });
  }

  onAddRoom(): void {}

  onClearRooms(): void {
    const dialogRef = this.matDialog.open(AdminRoomClearDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(
        tap((result) => {
          if (result) {
            this.roomManager.clear();
            this.dataSource.data = [];
            this.changeDetectorRef.markForCheck();
          }
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
