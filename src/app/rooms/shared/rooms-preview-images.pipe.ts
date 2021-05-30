import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '@app/rooms/common';

@Pipe({
  name: 'roomsPreviewImages',
})
export class RoomsPreviewImagesPipe implements PipeTransform {
  transform(rooms: Room[]): string[] {
    return rooms.reduce((accumulator, room) => [...accumulator, ...room.photos], [] as string[]);
  }
}
