import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PersonExtended } from '@app/persons/manager';

@Component({
  selector: 'app-admin-person-view-dialog',
  templateUrl: './admin-person-view-dialog.component.html',
  styleUrls: ['./admin-person-view-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonViewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly person: PersonExtended) {}
}
