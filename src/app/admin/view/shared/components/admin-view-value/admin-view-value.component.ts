import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-value',
  templateUrl: './admin-view-value.component.html',
  styleUrls: ['./admin-view-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminViewValueComponent {}
