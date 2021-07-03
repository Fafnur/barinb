import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavigationPath } from '@app/core/navigation/common';
import { NavigationService } from '@app/core/navigation/service';
import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styleUrls: ['./room-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomHeaderComponent {
  @Input() room!: RoomExtended;

  constructor(private readonly navigationService: NavigationService) {}

  onBack(): void {
    void this.navigationService.navigateByUrl(NavigationPath.Home);
  }
}
