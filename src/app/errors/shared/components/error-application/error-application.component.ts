import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-application',
  templateUrl: './error-application.component.html',
  styleUrls: ['./error-application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorApplicationComponent {
  onDownload(): void {
    // TODO: Add link to application
  }
}
