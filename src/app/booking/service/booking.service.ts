import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BookingDetails, BookingVariant } from '@app/booking/common';
import { BookingFacade } from '@app/booking/state';
import { Building } from '@app/buildings/common';
import { BuildingFacade } from '@app/buildings/state';
import { MapMarkerConfig } from '@app/maps/common';
import { Room } from '@app/rooms/common';
import { RoomFacade } from '@app/rooms/state';

export function getFirstRoomOnBuilding(building: Building, rooms: Room[]): Room | null {
  const firstRoomId = building.rooms.length ? building.rooms[0] : null;

  return firstRoomId ? rooms.find((room) => room.id === firstRoomId) ?? null : null;
}

export function castMapMarkerConfigs(bookingVariants: BookingVariant[]): MapMarkerConfig[] {
  return bookingVariants
    .filter((bookingVariant) => bookingVariant.rooms.length)
    .map((bookingVariant) => ({
      data: bookingVariant,
      lat: bookingVariant.lat,
      lng: bookingVariant.lng,
      label: {
        className: 'google-map-marker',
        text: bookingVariant.firstRoom?.price.toString() ?? '',
        fontWeight: 'bold',
      },
    }));
}

@Injectable()
export class BookingService {
  bookingVariant$: Observable<BookingVariant> = this.bookingFacade.bookingVariant$.pipe(filter<any>(Boolean));

  bookingVariants$: Observable<BookingVariant[]> = combineLatest([
    this.buildingFacade.buildings$.pipe(filter<any>(Boolean)),
    this.roomFacade.rooms$.pipe(filter<any>(Boolean)),
  ]).pipe(
    map(([buildings, rooms]: [Building[], Room[]]) =>
      buildings
        .filter((building) => building.rooms.length)
        .map((building) => ({ ...building, firstRoom: getFirstRoomOnBuilding(building, rooms) }))
    )
  );

  bookingDetails$: Observable<BookingDetails> = this.bookingFacade.bookingDetails$.pipe(filter<any>(Boolean));

  mapMarkers$: Observable<MapMarkerConfig[]> = this.bookingVariants$.pipe(map(castMapMarkerConfigs));

  constructor(
    private readonly buildingFacade: BuildingFacade,
    private readonly roomFacade: RoomFacade,
    private readonly bookingFacade: BookingFacade
  ) {}

  setBookingVariant(bookingVariant: BookingVariant): void {
    this.bookingFacade.setBookingVariant(bookingVariant);
  }

  setBookingDetails(bookingDetails: BookingDetails): void {
    this.bookingFacade.setBookingDetails(bookingDetails);
  }

  clearBookingVariant(): void {
    this.bookingFacade.clearBookingVariant();
  }

  clearBookingDetails(): void {
    this.bookingFacade.clearBookingDetails();
  }
}
