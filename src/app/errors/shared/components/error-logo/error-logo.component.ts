import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';

@Component({
  selector: 'app-error-logo',
  templateUrl: './error-logo.component.html',
  styleUrls: ['./error-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLogoComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;
}
