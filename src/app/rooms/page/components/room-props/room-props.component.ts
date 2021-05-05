import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-props',
  templateUrl: './room-props.component.html',
  styleUrls: ['./room-props.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPropsComponent {
  @Input() room!: RoomExtended;
}
