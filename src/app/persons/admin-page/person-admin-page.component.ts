import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-persons-admin-page',
  templateUrl: './person-admin-page.component.html',
  styleUrls: ['./person-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonAdminPageComponent {}
