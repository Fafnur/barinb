import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RoomExtended, RoomManager } from '@app/rooms/manager';

@Component({
  selector: 'app-room-admin-page',
  templateUrl: './room-admin-page.component.html',
  styleUrls: ['./room-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomAdminPageComponent implements OnInit {
  rooms$!: Observable<RoomExtended[]>;

  constructor(private readonly roomManager: RoomManager) {}

  ngOnInit(): void {
    this.rooms$ = this.roomManager.roomsExtended$;
  }
}
