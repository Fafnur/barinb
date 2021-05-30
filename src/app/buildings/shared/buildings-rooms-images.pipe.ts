import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '@app/rooms/common';

@Pipe({
  name: 'buildingsRoomsImages',
})
export class BuildingsRoomsImagesPipe implements PipeTransform {
  transform(buildings: { roomsExtended: Room[] }[]): string[] {
    return (
      buildings?.reduce(
        (accumulator, building) => [
          ...accumulator,
          ...building.roomsExtended.reduce((accumulatorRooms, room) => [...accumulatorRooms, ...room.photos], [] as string[]),
        ],
        [] as string[]
      ) ?? []
    );
  }
}
