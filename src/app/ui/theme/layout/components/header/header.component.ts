import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HelpDialogComponent } from './components/help-dialog/help-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private readonly matDialog: MatDialog) {}

  onOpenDialog(): void {
    this.matDialog.open(HelpDialogComponent);
  }
}
