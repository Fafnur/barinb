import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpDialogComponent {}
