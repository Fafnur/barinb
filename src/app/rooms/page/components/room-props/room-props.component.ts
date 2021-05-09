import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NumeralType } from '@app/core/numerals/common';
import { RoomExtended } from '@app/rooms/manager';

@Component({
  selector: 'app-room-props',
  templateUrl: './room-props.component.html',
  styleUrls: ['./room-props.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPropsComponent {
  @Input() room!: RoomExtended;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  NumeralType = NumeralType;
}
