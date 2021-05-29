import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BuildingExtended } from '@app/buildings/manager';
import { NavigationPath } from '@app/core/navigation/common';

@Component({
  selector: 'app-admin-building-card',
  templateUrl: './admin-building-card.component.html',
  styleUrls: ['./admin-building-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingCardComponent {
  @Input() building!: BuildingExtended;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;
}
