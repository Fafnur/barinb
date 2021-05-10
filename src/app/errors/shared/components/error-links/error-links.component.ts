import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';

@Component({
  selector: 'app-error-links',
  templateUrl: './error-links.component.html',
  styleUrls: ['./error-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLinksComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;
}
