import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-room-admin-page',
  templateUrl: './room-admin-page.component.html',
  styleUrls: ['./room-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomAdminPageComponent {}
