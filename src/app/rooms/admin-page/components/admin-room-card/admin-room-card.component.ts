import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RoomExtended } from '@app/rooms/manager';
import { NavigationPath } from '@app/core/navigation/common';

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
