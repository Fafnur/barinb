import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomDetailsComponent {
  @Input() room!: RoomExtended;
}
