import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationLink } from '@app/core/navigation/common';

@Component({
  selector: 'app-admin-menu-link',
  templateUrl: './admin-menu-link.component.html',
  styleUrls: ['./admin-menu-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMenuLinkComponent {
  @Input() link!: NavigationLink;
}
