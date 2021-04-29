import { Building } from '@app/buildings/common';
import { Room } from '@app/rooms/common';

export interface BookingVariant extends Building {
  firstRoom: Room | null;
}
