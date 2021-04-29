import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private readonly buildingService: BuildingService, private readonly roomService: RoomService) {}
}
