import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-bathrooms',
  templateUrl: './admin-room-bathrooms.component.html',
  styleUrls: ['./admin-room-bathrooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomBathroomsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
