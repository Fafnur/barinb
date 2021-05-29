import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Building } from '@app/buildings/common';
import { NavigationPath } from '@app/core/navigation/common';

@Component({
  selector: 'app-admin-building-link',
  templateUrl: './admin-building-link.component.html',
  styleUrls: ['./admin-building-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingLinkComponent {
  @Input() building!: Building;

  path = NavigationPath.AdminBuildingsPage;
}
