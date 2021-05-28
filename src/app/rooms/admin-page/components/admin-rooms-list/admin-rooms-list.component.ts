import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-admin-rooms-list',
  templateUrl: './admin-rooms-list.component.html',
  styleUrls: ['./admin-rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomsListComponent {
  @Input() set data(rooms: RoomExtended[] | null) {
    this.rooms = rooms;
    this.changeDetectorRef.markForCheck();
  }

  rooms!: RoomExtended[] | null;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  trackByFn(index: number, roomExtended: RoomExtended): number {
    return roomExtended.id;
  }
}
