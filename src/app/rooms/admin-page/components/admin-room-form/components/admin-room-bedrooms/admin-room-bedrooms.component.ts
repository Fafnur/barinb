import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-bedrooms',
  templateUrl: './admin-room-bedrooms.component.html',
  styleUrls: ['./admin-room-bedrooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomBedroomsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
