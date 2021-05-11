import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-photos',
  templateUrl: './admin-room-photos.component.html',
  styleUrls: ['./admin-room-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomPhotosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
