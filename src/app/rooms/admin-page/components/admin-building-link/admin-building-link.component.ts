import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';
import { Room } from '@app/rooms/common';

@Component({
  selector: 'app-admin-building-link',
  templateUrl: './admin-building-link.component.html',
  styleUrls: ['./admin-building-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingLinkComponent {
  @Input() room!: Room;

  path = NavigationPath.AdminBuildingsPage;
}
