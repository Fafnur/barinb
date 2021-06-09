import { Building } from '@app/buildings/common';
import { RoomEntity } from '@app/rooms/common';

export interface BookingVariant extends Building {
  firstRoom: RoomEntity | null;
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

export interface BookingPrice {
  days: number;
  rent: number;
  cleaning: number;
  fee: number;
  total: number;
}
