import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';
import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-admin-room-card',
  templateUrl: './admin-room-card.component.html',
  styleUrls: ['./admin-room-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomCardComponent {
  @Input() room!: RoomExtended;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;
}
