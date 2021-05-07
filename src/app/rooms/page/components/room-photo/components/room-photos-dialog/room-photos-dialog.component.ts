import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-room-photos-dialog',
  templateUrl: './room-photos-dialog.component.html',
  styleUrls: ['./room-photos-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPhotosDialogComponent {}
