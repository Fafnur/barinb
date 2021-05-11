import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-edit-dialog',
  templateUrl: './admin-room-edit-dialog.component.html',
  styleUrls: ['./admin-room-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomEditDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
