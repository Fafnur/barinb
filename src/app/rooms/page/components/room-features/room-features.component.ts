import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-features',
  templateUrl: './room-features.component.html',
  styleUrls: ['./room-features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomFeaturesComponent {
  @Input() room!: RoomExtended;
}
