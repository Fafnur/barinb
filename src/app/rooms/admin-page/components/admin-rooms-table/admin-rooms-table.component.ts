import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { RoomField } from '@app/rooms/common';
import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-admin-rooms-table',
  templateUrl: './admin-rooms-table.component.html',
  styleUrls: ['./admin-rooms-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomsTableComponent {
  @Input() set data(rooms: RoomExtended[] | null) {
    this.rooms = rooms;
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource<RoomExtended>();
    }

    this.dataSource.data = this.rooms?.length ? this.rooms : [];
    this.changeDetectorRef.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  RoomField = RoomField;

  rooms!: RoomExtended[] | null;

  dataSource!: MatTableDataSource<RoomExtended>;
  displayedColumns: string[] = [
    RoomField.ID,
    RoomField.Photos,
    RoomField.Price,
    RoomField.Created,
    RoomField.Updated,
    RoomField.Building,
    RoomField.Person,
    'actions',
  ];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
}
