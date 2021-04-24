import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Room } from '@app/rooms/common';
import { RoomService } from '@app/rooms/service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPageComponent implements OnInit {
  rooms$!: Observable<Room[]>;

  constructor(private readonly roomService: RoomService) {}

  ngOnInit(): void {
    this.rooms$ = this.roomService.rooms$;
  }
}
