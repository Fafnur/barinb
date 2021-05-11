import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-form',
  templateUrl: './admin-room-form.component.html',
  styleUrls: ['./admin-room-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
