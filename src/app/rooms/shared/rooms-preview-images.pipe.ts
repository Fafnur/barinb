import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '@app/rooms/common';

@Pipe({
  name: 'roomsPreviewImages',
})
export class RoomsPreviewImagesPipe implements PipeTransform {
  transform(rooms: Room[]): string[] {
    const images: string[] = [];
    rooms.forEach((room) => {
      images.push(...room.photos);
    });

    return images;
  }
}
