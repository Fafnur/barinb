import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-create-dialog',
  templateUrl: './admin-room-create-dialog.component.html',
  styleUrls: ['./admin-room-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomCreateDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
