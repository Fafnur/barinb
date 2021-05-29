import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';
import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-admin-person-link',
  templateUrl: './admin-person-link.component.html',
  styleUrls: ['./admin-person-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonLinkComponent {
  @Input() room!: RoomExtended;

  path = NavigationPath.AdminPersonsPage;
}
