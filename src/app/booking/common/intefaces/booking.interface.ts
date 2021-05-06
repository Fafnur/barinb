import { Building } from '@app/buildings/common';
import { Room } from '@app/rooms/common';

export interface BookingVariant extends Building {
  firstRoom: Room | null;
}

export enum BookingField {
  Period = 'period',
  PeriodStart = 'start',
  PeriodEnd = 'end',
  Guests = 'guests',
}

export interface BookingDetails {
  [BookingField.Period]: {
    [BookingField.PeriodStart]: string;
    [BookingField.PeriodEnd]: string;
  };
  [BookingField.Guests]: number;
}
