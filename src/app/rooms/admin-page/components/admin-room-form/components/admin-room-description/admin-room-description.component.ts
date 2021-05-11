import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-description',
  templateUrl: './admin-room-description.component.html',
  styleUrls: ['./admin-room-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
