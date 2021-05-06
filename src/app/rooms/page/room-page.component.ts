import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { RoomExtended, RoomManager } from '@app/rooms/manager';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPageComponent implements OnInit {
  roomExtended$!: Observable<RoomExtended>;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly roomManager: RoomManager) {}

  ngOnInit(): void {
    this.roomExtended$ = this.roomManager.roomExtended$(+this.activatedRoute.snapshot.params?.id);
  }
}
