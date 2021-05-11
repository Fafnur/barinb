import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-beds',
  templateUrl: './admin-room-beds.component.html',
  styleUrls: ['./admin-room-beds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomBedsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
