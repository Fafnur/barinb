import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NavigationPath } from '@app/core/navigation/common';

import { HelpDialogComponent } from './components/help-dialog/help-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NavigationPath = NavigationPath;

  constructor(private readonly matDialog: MatDialog) {}

  onOpenDialog(): void {
    this.matDialog.open(HelpDialogComponent);
  }
}
