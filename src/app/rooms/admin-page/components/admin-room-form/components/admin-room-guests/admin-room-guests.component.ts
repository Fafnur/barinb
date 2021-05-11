import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-guests',
  templateUrl: './admin-room-guests.component.html',
  styleUrls: ['./admin-room-guests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomGuestsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
