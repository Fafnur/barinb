import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';
import { Person } from '@app/persons/common';

@Component({
  selector: 'app-admin-person-link',
  templateUrl: './admin-person-link.component.html',
  styleUrls: ['./admin-person-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonLinkComponent {
  @Input() person!: Person;

  path = NavigationPath.AdminPersonsPage;
}
