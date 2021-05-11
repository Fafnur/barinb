import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-building',
  templateUrl: './admin-room-building.component.html',
  styleUrls: ['./admin-room-building.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomBuildingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
