import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BookingVariant } from '@app/booking/common';
import { BookingFacade } from '@app/booking/state';
import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';
import { MapMarkerConfig } from '@app/maps/common';
import { Room } from '@app/rooms/common';
import { RoomService } from '@app/rooms/service';

export function getFirstRoomOnBuilding(building: Building, rooms: Room[]): Room | null {
  const firstRoomId = building.rooms.length ? building.rooms[0] : null;

  return firstRoomId ? rooms.find((room) => room.id === firstRoomId) ?? null : null;
}

@Injectable()
export class BookingService {
  mapMarkers$: Observable<MapMarkerConfig[]> = combineLatest([this.buildingService.buildings$, this.roomService.rooms$]).pipe(
    map(([buildings, rooms]) => {
      const markers: MapMarkerConfig[] = [];
      buildings.forEach((building) => {
        const firstRoom = getFirstRoomOnBuilding(building, rooms);
        markers.push({
          ...building,
          firstRoom,
          label: {
            className: 'google-map-marker',
            text: firstRoom?.price.toString() ?? '',
            fontWeight: 'bold',
          },
        });
      });

      return markers;
    })
  );

  bookingVariant$: Observable<BookingVariant> = this.bookingFacade.bookingVariant$.pipe(filter<any>(Boolean));

  constructor(
    private readonly buildingService: BuildingService,
    private readonly roomService: RoomService,
    private readonly bookingFacade: BookingFacade
  ) {}

  setBookingVariant(bookingVariant: BookingVariant): void {
    this.bookingFacade.setBookingVariant(bookingVariant);
  }

  clearBookingVariant(): void {
    this.bookingFacade.clearBookingVariant();
  }
}
