import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';
import { PersonExtended } from '@app/persons/manager';

@Component({
  selector: 'app-admin-person-card',
  templateUrl: './admin-person-card.component.html',
  styleUrls: ['./admin-person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonCardComponent {
  @Input() person!: PersonExtended;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;
}
