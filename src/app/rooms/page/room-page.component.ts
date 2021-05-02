import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Room } from '@app/rooms/common';
import { RoomService } from '@app/rooms/service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPageComponent implements OnInit {
  room$!: Observable<Room>;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly roomService: RoomService) {}

  ngOnInit(): void {
    this.room$ = this.roomService.room$(+this.activatedRoute.snapshot.params?.id);
  }
}
